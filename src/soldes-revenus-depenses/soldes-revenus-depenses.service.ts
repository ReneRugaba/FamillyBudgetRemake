import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateSoldesRevenusDepenseDto } from './dto/create-soldes-revenus-depense.dto';
import { UpdateSoldesRevenusDepenseDto } from './dto/update-soldes-revenus-depense.dto';
import { SoldesRevenusDepense } from './entities/soldes-revenus-depense.entity';

@Injectable()
export class SoldesRevenusDepensesService {
  constructor(
    @InjectRepository(SoldesRevenusDepense)
    private soldesRevenusDepense: Repository<SoldesRevenusDepense>,
  ) {}

  async create(
    createSoldesRevenusDepenseDto: CreateSoldesRevenusDepenseDto,
  ): Promise<SoldesRevenusDepense> {
    try {
      const solde: SoldesRevenusDepense = await this.soldesRevenusDepense.save(
        createSoldesRevenusDepenseDto,
      );
      return solde;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<SoldesRevenusDepense[]> {
    try {
      const soldes: SoldesRevenusDepense[] =
        await this.soldesRevenusDepense.find();
      if (soldes.length >= 1) {
        return soldes;
      } else {
        throw new NotFoundException();
      }
    } catch (error) {
      if (error.respnse.satusCode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findOne(id: number): Promise<SoldesRevenusDepense> {
    try {
      const solde: SoldesRevenusDepense =
        await this.soldesRevenusDepense.findOne(id);
      if (!solde) {
        throw new NotFoundException();
      }
      return solde;
    } catch (error) {
      if (error.response.statusCode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async update(
    id: number,
    updateSoldesRevenusDepenseDto: UpdateSoldesRevenusDepenseDto,
  ): Promise<UpdateResult> {
    try {
      const affected: UpdateResult = await this.soldesRevenusDepense.update(
        id,
        updateSoldesRevenusDepenseDto,
      );
      if (affected.affected !== 1) {
        throw new NotFoundException();
      }
      return affected;
    } catch (error) {
      if (error.response.statusCode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async remove(id: number) {
    try {
      const affected: DeleteResult = await this.soldesRevenusDepense.delete(id);
      if (affected.affected !== 1) {
        throw new NotFoundException();
      }
      return affected;
    } catch (error) {
      if (error.response.statusCode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
