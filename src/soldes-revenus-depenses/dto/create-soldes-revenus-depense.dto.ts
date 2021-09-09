import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Member } from 'src/members/entities/member.entity';
import { IsNull } from 'typeorm';

export class CreateSoldesRevenusDepenseDto {
  @IsNumber()
  revenusTotals: number;

  @IsNumber()
  depensesTotals: number;

  @IsNumber()
  soldesRestants: number;

  @IsNumber()
  @IsOptional()
  memberId: number;

  @IsString()
  datePeriode: string;
}
