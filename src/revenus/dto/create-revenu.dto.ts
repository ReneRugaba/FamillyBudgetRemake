import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { Member } from './../../members/entities/member.entity';
import { TypesRevenu } from './../../types-revenus/entities/types-revenu.entity';

export class CreateRevenuDto {
  @IsNotEmpty()
  @IsNumber()
  montant: number;

  @IsNotEmpty()
  @IsString()
  dateReception: string;

  @IsNumber()
  member: Member;

  @IsNumber()
  typeRevenus: TypesRevenu;
}
