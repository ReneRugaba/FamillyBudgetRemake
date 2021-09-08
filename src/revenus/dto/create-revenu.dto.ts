import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRevenuDto {
  @IsNotEmpty()
  @IsNumber()
  montant: number;

  @IsNotEmpty()
  @IsString()
  dateReception: string;
}
