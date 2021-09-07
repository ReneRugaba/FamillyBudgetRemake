import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RevenusService } from './revenus.service';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';

@Controller('revenus')
export class RevenusController {
  constructor(private readonly revenusService: RevenusService) {}

  @Post()
  create(@Body() createRevenuDto: CreateRevenuDto) {
    return this.revenusService.create(createRevenuDto);
  }

  @Get()
  findAll() {
    return this.revenusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevenuDto: UpdateRevenuDto) {
    return this.revenusService.update(+id, updateRevenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenusService.remove(+id);
  }
}
