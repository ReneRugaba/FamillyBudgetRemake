import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateTypesRevenuDto {
    @IsNotEmpty()
    @IsString()
    @Length(3)
    nom: string;
}
