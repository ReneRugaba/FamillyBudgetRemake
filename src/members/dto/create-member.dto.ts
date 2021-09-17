import {
  IsString,
  IsNotEmpty,
  Length,
  IsEmail,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @IsString()
  @Length(3)
  @IsNotEmpty()
  nom: string;

  @IsString()
  @Length(3)
  @IsNotEmpty()
  prenom: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  
  @Length(8)
  @Matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
  @IsNotEmpty()
  password: string;
}
