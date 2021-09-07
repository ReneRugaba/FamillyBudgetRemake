import { Injectable } from '@nestjs/common';
import { CreateTypesRevenuDto } from './dto/create-types-revenu.dto';
import { UpdateTypesRevenuDto } from './dto/update-types-revenu.dto';

@Injectable()
export class TypesRevenusService {
  create(createTypesRevenuDto: CreateTypesRevenuDto) {
    return 'This action adds a new typesRevenu';
  }

  findAll() {
    return `This action returns all typesRevenus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typesRevenu`;
  }

  update(id: number, updateTypesRevenuDto: UpdateTypesRevenuDto) {
    return `This action updates a #${id} typesRevenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} typesRevenu`;
  }
}
