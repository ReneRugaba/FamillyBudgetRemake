import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
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
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Member } from './entities/member.entity';
import { UpdateResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './dto/login.dto';
import { GetUserDTO } from './dto/getUserDTO';


@Controller('members')
@ApiTags('Members')
export class MembersController {
  constructor(private readonly membersService: MembersService, private authService:AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post("/getconnect-user")
  @ApiBearerAuth()
  getMemberByUsename(@Body() user:GetUserDTO){
    return this.membersService.findOneMember(user.username)
  }

  @Post()
  @ApiCreatedResponse({ description: 'created', type: Member })
  @ApiInternalServerErrorResponse({
    description: 'not created',
  })
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Response ok', type: [Member] })
  @ApiNotFoundResponse({ description: 'no datas found!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'response OK!', type: Member })
  @ApiNotFoundResponse({ description: 'Not found Response!' })
  @ApiInternalServerErrorResponse({ description: 'Interna server error!' })
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Data Updated!', type: UpdateResult })
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
