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
import { ApiBearerAuth, ApiTags, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { CathegoriesDepensesService } from './cathegories-depenses.service';
import { CreateCathegoriesDepenseDto } from './dto/create-cathegories-depense.dto';
import { UpdateCathegoriesDepenseDto } from './dto/update-cathegories-depense.dto';
import { JwtAuthGuard } from '../members/jwt-auth.guard';
import { CathegoriesDepense } from './entities/cathegories-depense.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { affectedUpdateData } from './../config/affectedUpdateData.dto';
import { affectedDeletedData } from '../config/affectedDeletedData.dto';

@Controller('cathegories-depenses')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags("CATHEGORIES-DEPENSES")
export class CathegoriesDepensesController {
  constructor(
    private readonly cathegoriesDepensesService: CathegoriesDepensesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({description: 'Created response!', type: CathegoriesDepense })
  @ApiInternalServerErrorResponse({description: 'Internal server error response!'})
  @ApiBearerAuth()
  create(@Body() createCathegoriesDepenseDto: CreateCathegoriesDepenseDto) {
    return this.cathegoriesDepensesService.create(createCathegoriesDepenseDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({description: 'Created response!', type: [CathegoriesDepense] })
  @ApiInternalServerErrorResponse({description: 'Internal server error response!'})
  @ApiNotFoundResponse({description: 'Not found response!'})
  findAll() {
    return this.cathegoriesDepensesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({description: 'Created response!', type: CathegoriesDepense })
  @ApiInternalServerErrorResponse({description: 'Internal server error response!'})
  @ApiNotFoundResponse({description: 'Not found response!'})
  findOne(@Param('id') id: string) {
    return this.cathegoriesDepensesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({description: 'Created response!', type: affectedUpdateData })
  @ApiInternalServerErrorResponse({description: 'Internal server error response!'})
  @ApiNotFoundResponse({description: 'Not found response!'})
  update(
    @Param('id') id: string,
    @Body() updateCathegoriesDepenseDto: UpdateCathegoriesDepenseDto,
  ) {
    return this.cathegoriesDepensesService.update(
      +id,
      updateCathegoriesDepenseDto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({description: 'Created response!', type: affectedDeletedData  })
  @ApiInternalServerErrorResponse({description: 'Internal server error response!'})
  @ApiNotFoundResponse({description: 'Not found response!'})
  remove(@Param('id') id: string) {
    return this.cathegoriesDepensesService.remove(+id);
  }
}
