import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationName1646253573408 implements MigrationInterface {
    name = 'migrationName1646253573408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "types-revenus" (
                "id" SERIAL NOT NULL,
                "nom" character varying NOT NULL,
                CONSTRAINT "PK_24a077d462a794e8bd675bc78f1" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "revenus" (
                "id" SERIAL NOT NULL,
                "montant" double precision NOT NULL,
                "dateReception" date NOT NULL,
                "memberId" integer,
                "typeRevenusId" integer,
                CONSTRAINT "PK_06c2b81083f007135fe29b2deee" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "Soldes-revenus-depenses" (
                "id" SERIAL NOT NULL,
                "revenusTotals" integer NOT NULL,
                "depensesTotals" double precision NOT NULL,
                "datePeriode" date NOT NULL,
                "soldesRestants" double precision NOT NULL,
                "memberId" integer,
                CONSTRAINT "PK_e0eae9df899004e3d2262de51db" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "member" (
                "id" SERIAL NOT NULL,
                "nom" character varying NOT NULL,
                "prenom" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "UQ_4678079964ab375b2b31849456c" UNIQUE ("email"),
                CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "Depenses" (
                "id" SERIAL NOT NULL,
                "montant" double precision NOT NULL,
                "dateDepense" date NOT NULL,
                "beneficiaire" character varying NOT NULL,
                "memberId" integer,
                "cathegorieDepenseId" integer,
                CONSTRAINT "PK_629a2b855d0e68684215e5444e8" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "cathegories-depenses" (
                "id" SERIAL NOT NULL,
                "nom" character varying NOT NULL,
                CONSTRAINT "PK_c7df6b220ee0ec7cda37cb308ef" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "revenus"
            ADD CONSTRAINT "FK_ebe7a1b84fa70356a496a599ec5" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "revenus"
            ADD CONSTRAINT "FK_ae23696db671f28f2eba66d7dd4" FOREIGN KEY ("typeRevenusId") REFERENCES "types-revenus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "Soldes-revenus-depenses"
            ADD CONSTRAINT "FK_54be2eb7936eaca20d574e1213c" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "Depenses"
            ADD CONSTRAINT "FK_501f6f501ee7b2e48223389cecf" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "Depenses"
            ADD CONSTRAINT "FK_5637494957ae6c48848e2d8a329" FOREIGN KEY ("cathegorieDepenseId") REFERENCES "cathegories-depenses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "Depenses" DROP CONSTRAINT "FK_5637494957ae6c48848e2d8a329"
        `);
        await queryRunner.query(`
            ALTER TABLE "Depenses" DROP CONSTRAINT "FK_501f6f501ee7b2e48223389cecf"
        `);
        await queryRunner.query(`
            ALTER TABLE "Soldes-revenus-depenses" DROP CONSTRAINT "FK_54be2eb7936eaca20d574e1213c"
        `);
        await queryRunner.query(`
            ALTER TABLE "revenus" DROP CONSTRAINT "FK_ae23696db671f28f2eba66d7dd4"
        `);
        await queryRunner.query(`
            ALTER TABLE "revenus" DROP CONSTRAINT "FK_ebe7a1b84fa70356a496a599ec5"
        `);
        await queryRunner.query(`
            DROP TABLE "cathegories-depenses"
        `);
        await queryRunner.query(`
            DROP TABLE "Depenses"
        `);
        await queryRunner.query(`
            DROP TABLE "member"
        `);
        await queryRunner.query(`
            DROP TABLE "Soldes-revenus-depenses"
        `);
        await queryRunner.query(`
            DROP TABLE "revenus"
        `);
        await queryRunner.query(`
            DROP TABLE "types-revenus"
        `);
    }

}
