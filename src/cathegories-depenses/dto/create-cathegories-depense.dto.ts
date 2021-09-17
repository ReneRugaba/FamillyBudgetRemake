import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateCathegoriesDepenseDto {
    @IsString()
    @Length(3)
    @IsNotEmpty()
    nom: string;
}
