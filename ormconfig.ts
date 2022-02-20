import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"
import * as dotenv from 'dotenv' 

dotenv.config()

const OrmConfig:PostgresConnectionOptions={
    type: "postgres",
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_AP),
    username: process.env.USER_DB,
    password: process.env.PASSWORD_APP,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: ["dist/migrations/*{.ts,.js}"],
    cli:{
      migrationsDir:"src/migrations"
    },
    migrationsRun: true
}

export default OrmConfig