import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCathegoriesDepenseDto } from './dto/create-cathegories-depense.dto';
import { UpdateCathegoriesDepenseDto } from './dto/update-cathegories-depense.dto';
import { CathegoriesDepense } from './entities/cathegories-depense.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CathegoriesDepensesService {

  constructor(
    @InjectRepository(CathegoriesDepense)
    private cathegoriesDepensesRepository: Repository<CathegoriesDepense>
    ) {}

  async create(createCathegoriesDepenseDto: CreateCathegoriesDepenseDto): Promise<CathegoriesDepense> {
    try {
      const cathegoriesDepense: CathegoriesDepense = await this.cathegoriesDepensesRepository.save(createCathegoriesDepenseDto)
      return cathegoriesDepense;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<CathegoriesDepense[]> {
    try {
      const cathegoriesDepenses: CathegoriesDepense[] = await this.cathegoriesDepensesRepository.find();
      if (cathegoriesDepenses.length === 0) {
        throw new NotFoundException()
      }
      return cathegoriesDepenses;
    } catch (error) {
      if (error.response.statusCode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findOne(id: number): Promise<CathegoriesDepense> {
    try {
      const cathegoriesDepenses: CathegoriesDepense = await this.cathegoriesDepensesRepository.findOne(id);
      if (!cathegoriesDepenses) {
        throw new NotFoundException()
      }
      return cathegoriesDepenses;
    } catch (error) {
      if (error.response.statusCode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async update(id: number, updateCathegoriesDepenseDto: UpdateCathegoriesDepenseDto): Promise<UpdateResult> {
    try {
      const affected: UpdateResult  = await this.cathegoriesDepensesRepository.update(id, updateCathegoriesDepenseDto);
      if (affected.affected===0) {
        throw new NotFoundException()
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

  async remove(id: number):Promise<DeleteResult> {
    try {
      const affected: DeleteResult  = await this.cathegoriesDepensesRepository.delete(id);
      if (affected.affected===0) {
        throw new NotFoundException()
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
