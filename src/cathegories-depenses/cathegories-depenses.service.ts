import { Injectable } from '@nestjs/common';
import { CreateCathegoriesDepenseDto } from './dto/create-cathegories-depense.dto';
import { UpdateCathegoriesDepenseDto } from './dto/update-cathegories-depense.dto';

@Injectable()
export class CathegoriesDepensesService {
  create(createCathegoriesDepenseDto: CreateCathegoriesDepenseDto) {
    return 'This action adds a new cathegoriesDepense';
  }

  findAll() {
    return `This action returns all cathegoriesDepenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cathegoriesDepense`;
  }

  update(id: number, updateCathegoriesDepenseDto: UpdateCathegoriesDepenseDto) {
    return `This action updates a #${id} cathegoriesDepense`;
  }

  remove(id: number) {
    return `This action removes a #${id} cathegoriesDepense`;
  }
}
