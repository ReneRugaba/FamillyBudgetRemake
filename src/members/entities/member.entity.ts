import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Depense } from './../../depenses/entities/depense.entity';
import { Revenu } from './../../revenus/entities/revenu.entity';
import { SoldesRevenusDepense } from './../../soldes-revenus-depenses/entities/soldes-revenus-depense.entity';

@Entity('member')
@Unique(['email'])
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Depense, (depense) => depense.member)
  depenses: Depense;

  @OneToMany(() => Revenu, (revenu) => revenu.member)
  revenu: Revenu;

  @OneToMany(() => SoldesRevenusDepense, (solde) => solde.member)
  soldesReveusDepenses: SoldesRevenusDepense;
}
