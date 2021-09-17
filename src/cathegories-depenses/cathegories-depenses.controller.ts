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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CathegoriesDepensesService } from './cathegories-depenses.service';
import { CreateCathegoriesDepenseDto } from './dto/create-cathegories-depense.dto';
import { UpdateCathegoriesDepenseDto } from './dto/update-cathegories-depense.dto';
import { JwtAuthGuard } from '../members/jwt-auth.guard';

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
  @ApiBearerAuth()
  create(@Body() createCathegoriesDepenseDto: CreateCathegoriesDepenseDto) {
    return this.cathegoriesDepensesService.create(createCathegoriesDepenseDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findAll() {
    return this.cathegoriesDepensesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.cathegoriesDepensesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
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
  remove(@Param('id') id: string) {
    return this.cathegoriesDepensesService.remove(+id);
  }
}
