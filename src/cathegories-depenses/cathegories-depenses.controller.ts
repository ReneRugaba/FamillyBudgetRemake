import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CathegoriesDepensesService } from './cathegories-depenses.service';
import { CreateCathegoriesDepenseDto } from './dto/create-cathegories-depense.dto';
import { UpdateCathegoriesDepenseDto } from './dto/update-cathegories-depense.dto';

@Controller('cathegories-depenses')
export class CathegoriesDepensesController {
  constructor(
    private readonly cathegoriesDepensesService: CathegoriesDepensesService,
  ) {}

  @Post()
  create(@Body() createCathegoriesDepenseDto: CreateCathegoriesDepenseDto) {
    return this.cathegoriesDepensesService.create(createCathegoriesDepenseDto);
  }

  @Get()
  findAll() {
    return this.cathegoriesDepensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cathegoriesDepensesService.findOne(+id);
  }

  @Patch(':id')
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
  remove(@Param('id') id: string) {
    return this.cathegoriesDepensesService.remove(+id);
  }
}
