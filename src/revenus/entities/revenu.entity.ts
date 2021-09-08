import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

@Entity('revenus')
export class Revenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  montant: number;

  @Column({ type: 'date' })
  dateReception: string;
}
