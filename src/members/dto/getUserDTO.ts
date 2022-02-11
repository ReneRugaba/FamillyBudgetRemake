import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";


export class GetUserDTO{
    @ApiProperty()
    @IsString()
    @Length(3)
    username:string
}