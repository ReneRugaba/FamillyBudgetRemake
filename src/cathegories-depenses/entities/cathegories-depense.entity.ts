import { Depense } from 'src/depenses/entities/depense.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity("cathegories-depenses")
export class CathegoriesDepense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(()=>Depense,(depense)=>depense.cathegorieDepense)
  depenses:Depense;
}
