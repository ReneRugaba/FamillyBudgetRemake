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

@Controller('soldes-revenus-depenses')
export class SoldesRevenusDepensesController {
  constructor(
    private readonly soldesRevenusDepensesService: SoldesRevenusDepensesService,
  ) {}

  @Post()
  create(@Body() createSoldesRevenusDepenseDto: CreateSoldesRevenusDepenseDto) {
    return this.soldesRevenusDepensesService.create(
      createSoldesRevenusDepenseDto,
    );
  }

  @Get()
  findAll() {
    return this.soldesRevenusDepensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldesRevenusDepensesService.findOne(+id);
  }

  @Patch(':id')
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
  remove(@Param('id') id: string) {
    return this.soldesRevenusDepensesService.remove(+id);
  }
}
