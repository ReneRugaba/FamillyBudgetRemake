import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SoldesRevenusDepensesService } from './soldes-revenus-depenses.service';
import { CreateSoldesRevenusDepenseDto } from './dto/create-soldes-revenus-depense.dto';
import { UpdateSoldesRevenusDepenseDto } from './dto/update-soldes-revenus-depense.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { SoldesRevenusDepense } from './entities/soldes-revenus-depense.entity';
import { affectedUpdateData } from './../config/affectedUpdateData.dto';
import { affectedDeletedData } from '../config/affectedDeletedData.dto';

@Controller('soldes-revenus-depenses')
@ApiTags('SOLDES_REVENUS_DEPENSES')
export class SoldesRevenusDepensesController {
  constructor(
    private readonly soldesRevenusDepensesService: SoldesRevenusDepensesService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created response',
    type: SoldesRevenusDepense,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error response',
  })
  create(
    @Body() createSoldesRevenusDepenseDto: CreateSoldesRevenusDepenseDto,
  ): Promise<SoldesRevenusDepense> {
    return this.soldesRevenusDepensesService.create(
      createSoldesRevenusDepenseDto,
    );
  }

  @Get()
  @ApiOkResponse({
    description: 'Succefuf request!',
    type: [SoldesRevenusDepense],
  })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  findAll() {
    return this.soldesRevenusDepensesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Succefuf request!',
    type: SoldesRevenusDepense,
  })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  findOne(@Param('id') id: string) {
    return this.soldesRevenusDepensesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Succefuf request!',
    type: affectedUpdateData,
  })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  update(
    @Param('id') id: string,
    @Body() updateSoldesRevenusDepenseDto: UpdateSoldesRevenusDepenseDto,
  ) {
    return this.soldesRevenusDepensesService.update(
      +id,
      updateSoldesRevenusDepenseDto,
    );
  }

  @Delete(':id')
  @Patch(':id')
  @ApiOkResponse({
    description: 'Succefuf request!',
    type: affectedDeletedData,
  })
  @ApiNotFoundResponse({ description: 'Not found response!' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error!' })
  remove(@Param('id') id: string) {
    return this.soldesRevenusDepensesService.remove(+id);
  }
}
