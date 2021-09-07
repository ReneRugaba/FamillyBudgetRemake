import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Member } from './entities/member.entity';
import { UpdateResult } from 'typeorm';

@Controller('members')
@ApiTags('Members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ApiCreatedResponse({ description: 'created', type: Member })
  @ApiInternalServerErrorResponse({
    description: 'not created',
  })
  create(@Body() createMemberDto: CreateMemberDto) {
    console.log(createMemberDto);
    return this.membersService.create(createMemberDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Response ok', type: [Member] })
  @ApiNotFoundResponse({ description: 'no datas found!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'response OK!', type: Member })
  @ApiNotFoundResponse({ description: 'Not found Response!' })
  @ApiInternalServerErrorResponse({ description: 'Interna server error!' })
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Data Updated!', type: UpdateResult })
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
