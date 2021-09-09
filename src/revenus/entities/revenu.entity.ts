import { Column, Entity, ManyToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Member } from './../../members/entities/member.entity';
import { TypesRevenu } from './../../types-revenus/entities/types-revenu.entity';

@Entity('revenus')
export class Revenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  montant: number;

  @Column({ type: 'date' })
  dateReception: string;

  @ManyToOne(() => Member, (member) => member.revenu)
  member: Member;

  @ManyToOne(() => TypesRevenu, (typeRevenu) => typeRevenu.revenu, {
    eager: true,
  })
  typeRevenus: TypesRevenu;
}
