import { CathegoriesDepense } from 'src/cathegories-depenses/entities/cathegories-depense.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from './../../members/entities/member.entity';

@Entity('Depenses')
export class Depense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  montant: number;

  @Column({ type: 'date' })
  dateDepense: string;

  @Column()
  beneficiaire: string;

  @ManyToOne(() => Member, (member) => member.depenses)
  member: Member;

  @ManyToOne(()=> CathegoriesDepense,(cathegorieDepense)=>cathegorieDepense.depenses)
  cathegorieDepense:CathegoriesDepense
}
