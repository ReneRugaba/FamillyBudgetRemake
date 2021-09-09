import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';
import { Depense } from './entities/depense.entity';

@Injectable()
export class DepensesService {
  constructor(
    @InjectRepository(Depense)
    private depenseRepository: Repository<Depense>,
  ) {}

  async create(createDepenseDto: CreateDepenseDto): Promise<Depense> {
    try {
      const depense: Depense = await this.depenseRepository.save(
        createDepenseDto,
      );
      return depense;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<Depense[]> {
    try {
      const depenses: Depense[] = await this.depenseRepository.find();
      if (depenses.length >= 1) {
        return depenses;
      } else {
        throw new NotFoundException();
      }
    } catch (error) {
      if (error.response.statusCode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findOne(id: number): Promise<Depense> {
    try {
      const depense: Depense = await this.depenseRepository.findOne(id);
      if (!depense) {
        throw new NotFoundException();
      }
      return depense;
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
    updateDepenseDto: UpdateDepenseDto,
  ): Promise<UpdateResult> {
    try {
      const affected: UpdateResult = await this.depenseRepository.update(
        id,
        updateDepenseDto,
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

  async remove(id: number): Promise<DeleteResult> {
    try {
      const affected: DeleteResult = await this.depenseRepository.delete(id);
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
