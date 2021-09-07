import { Injectable } from '@nestjs/common';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';

@Injectable()
export class RevenusService {
  create(createRevenuDto: CreateRevenuDto) {
    return 'This action adds a new revenu';
  }

  findAll() {
    return `This action returns all revenus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} revenu`;
  }

  update(id: number, updateRevenuDto: UpdateRevenuDto) {
    return `This action updates a #${id} revenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} revenu`;
  }
}
