import { Injectable } from '@nestjs/common';
import { CreateSoldesRevenusDepenseDto } from './dto/create-soldes-revenus-depense.dto';
import { UpdateSoldesRevenusDepenseDto } from './dto/update-soldes-revenus-depense.dto';

@Injectable()
export class SoldesRevenusDepensesService {
  create(createSoldesRevenusDepenseDto: CreateSoldesRevenusDepenseDto) {
    return 'This action adds a new soldesRevenusDepense';
  }

  findAll() {
    return `This action returns all soldesRevenusDepenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soldesRevenusDepense`;
  }

  update(
    id: number,
    updateSoldesRevenusDepenseDto: UpdateSoldesRevenusDepenseDto,
  ) {
    return `This action updates a #${id} soldesRevenusDepense`;
  }

  remove(id: number) {
    return `This action removes a #${id} soldesRevenusDepense`;
  }
}
