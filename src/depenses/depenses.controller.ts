import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepensesService } from './depenses.service';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Depense } from './entities/depense.entity';
import { affectedUpdateData } from './../config/affectedUpdateData.dto';
import { affectedDeletedData } from './../config/affectedDeletedData.dto';

@Controller('depenses')
@ApiTags('DEPENSES')
export class DepensesController {
  constructor(private readonly depensesService: DepensesService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Created response!', type: Depense })
  @ApiInternalServerErrorResponse({ description: 'Internal server response!' })
  create(@Body() createDepenseDto: CreateDepenseDto) {
    return this.depensesService.create(createDepenseDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Succeful request!', type: [Depense] })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server response!' })
  findAll() {
    return this.depensesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Succeful request!', type: Depense })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server response!' })
  findOne(@Param('id') id: string) {
    return this.depensesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Succeful request!', type: affectedUpdateData })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server response!' })
  update(@Param('id') id: string, @Body() updateDepenseDto: UpdateDepenseDto) {
    return this.depensesService.update(+id, updateDepenseDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Succeful request!',
    type: affectedDeletedData,
  })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server response!' })
  remove(@Param('id') id: string) {
    return this.depensesService.remove(+id);
  }
}
