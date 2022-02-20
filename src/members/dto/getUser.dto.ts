import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";


export class GetUserDTO{
    @IsString()
    @Length(3)
    username:string
}