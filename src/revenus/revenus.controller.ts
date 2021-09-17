import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RevenusService } from './revenus.service';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Revenu } from './entities/revenu.entity';
import { affectedUpdateData } from '../config/affectedUpdateData.dto';
import { affectedDeletedData } from './../config/affectedDeletedData.dto';
import { JwtAuthGuard } from '../members/jwt-auth.guard';

@Controller('revenus')
@ApiTags('REVENUS')
export class RevenusController {
  constructor(private readonly revenusService: RevenusService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'Created response', type: Revenu })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  create(@Body() createRevenuDto: CreateRevenuDto) {
    return this.revenusService.create(createRevenuDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Datas found!', type: [Revenu] })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  findAll() {
    return this.revenusService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Datas found!', type: Revenu })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  findOne(@Param('id') id: string) {
    return this.revenusService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Data updated!',
    type: affectedUpdateData,
  })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  update(@Param('id') id: string, @Body() updateRevenuDto: UpdateRevenuDto) {
    return this.revenusService.update(+id, updateRevenuDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Data updated!',
    type: affectedDeletedData,
  })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  remove(@Param('id') id: string) {
    return this.revenusService.remove(+id);
  }
}
