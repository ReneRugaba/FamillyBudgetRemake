import { IsNumber, IsString } from 'class-validator';

export class CreateDepenseDto {
  @IsNumber()
  montant: number;

  @IsString()
  dateDepense: string;

  @IsString()
  beneficiaire: string;
}
