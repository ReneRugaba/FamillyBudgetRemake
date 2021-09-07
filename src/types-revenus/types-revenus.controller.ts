import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypesRevenusService } from './types-revenus.service';
import { CreateTypesRevenuDto } from './dto/create-types-revenu.dto';
import { UpdateTypesRevenuDto } from './dto/update-types-revenu.dto';

@Controller('types-revenus')
export class TypesRevenusController {
  constructor(private readonly typesRevenusService: TypesRevenusService) {}

  @Post()
  create(@Body() createTypesRevenuDto: CreateTypesRevenuDto) {
    return this.typesRevenusService.create(createTypesRevenuDto);
  }

  @Get()
  findAll() {
    return this.typesRevenusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesRevenusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypesRevenuDto: UpdateTypesRevenuDto,
  ) {
    return this.typesRevenusService.update(+id, updateTypesRevenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesRevenusService.remove(+id);
  }
}
