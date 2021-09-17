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
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { affectedUpdateData } from '../config/affectedUpdateData.dto';
import { affectedDeletedData } from '../config/affectedDeletedData.dto';

@Controller('types-revenus')
@ApiTags("TYPES-REVENUS")
export class TypesRevenusController {
  constructor(private readonly typesRevenusService: TypesRevenusService) {}

  @Post()
  @ApiCreatedResponse({description: "Created response", type: CreateTypesRevenuDto})
  @ApiInternalServerErrorResponse({description: "Internal server response"})
  create(@Body() createTypesRevenuDto: CreateTypesRevenuDto) {
    return this.typesRevenusService.create(createTypesRevenuDto);
  }

  @Get()
  @ApiCreatedResponse({description: "Created response", type: [CreateTypesRevenuDto]})
  @ApiNotFoundResponse({description: "Not found response"})
  @ApiInternalServerErrorResponse({description: "Internal server response"})
  findAll() {
    return this.typesRevenusService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({description: "Created response", type: CreateTypesRevenuDto})
  @ApiNotFoundResponse({description: "Not found response"})
  @ApiInternalServerErrorResponse({description: "Internal server response"})
  findOne(@Param('id') id: string) {
    return this.typesRevenusService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({description: "Created response", type: affectedUpdateData})
  @ApiNotFoundResponse({description: "Not found response"})
  @ApiInternalServerErrorResponse({description: "Internal server response"})
  update(
    @Param('id') id: string,
    @Body() updateTypesRevenuDto: UpdateTypesRevenuDto,
  ) {
    return this.typesRevenusService.update(+id, updateTypesRevenuDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({description: "Created response", type: affectedDeletedData})
  @ApiNotFoundResponse({description: "Not found response"})
  @ApiInternalServerErrorResponse({description: "Internal server response"})
  remove(@Param('id') id: string) {
    return this.typesRevenusService.remove(+id);
  }
}
