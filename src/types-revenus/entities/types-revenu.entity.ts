import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Revenu } from './../../revenus/entities/revenu.entity';

@Entity('types-revenus')
export class TypesRevenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(() => Revenu, (revenu) => revenu.typeRevenus)
  revenu: Revenu;
}
