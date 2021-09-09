import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Member } from './../../members/entities/member.entity';
@Entity('SoldesRevenusDepenses')
export class SoldesRevenusDepense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  revenusTotals: number;

  @Column({ type: 'float' })
  depensesTotals: number;

  @Column({ type: 'date' })
  datePeriode: string;

  @Column({ type: 'float' })
  soldesRestants: number;

  @ManyToOne(() => Member, (member) => member.soldesReveusDepenses)
  member: Member;
}
