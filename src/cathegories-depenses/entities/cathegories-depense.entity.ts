import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("cathegories-depenses")
export class CathegoriesDepense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;
}
