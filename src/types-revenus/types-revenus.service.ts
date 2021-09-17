import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTypesRevenuDto } from './dto/create-types-revenu.dto';
import { UpdateTypesRevenuDto } from './dto/update-types-revenu.dto';
import { TypesRevenu } from './entities/types-revenu.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TypesRevenusService {
  constructor(
    @InjectRepository(TypesRevenu)
    private typesRevenusRepository: Repository<TypesRevenu>
  ){}


  async create(createTypesRevenuDto: CreateTypesRevenuDto): Promise<TypesRevenu> {
    try {
      const typeRevenu: TypesRevenu = await this.typesRevenusRepository.save(createTypesRevenuDto);
      return typeRevenu;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll():Promise<TypesRevenu[]> {
    try {
      const typesRevenus: TypesRevenu[] = await this.typesRevenusRepository.find();
      if (typesRevenus.length <= 0) {
        throw new NotFoundException();
      }
      return typesRevenus;
    } catch (error) {
      if (error.response.statuscode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findOne(id: number) {
    try {
      const typeRevenu: TypesRevenu = await this.typesRevenusRepository.findOne(id);
      console.log(id);
      if (!typeRevenu) {
        throw new NotFoundException();
      }
      return typeRevenu;
    } catch (error) {
      if (error.response.statusCode === 404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async update(id: number, updateTypesRevenuDto: UpdateTypesRevenuDto): Promise<UpdateResult> {
    try {
      const affected: UpdateResult = await this.typesRevenusRepository.update(id, updateTypesRevenuDto);
      if (affected.affected === 0) {
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
      const affected: DeleteResult = await this.typesRevenusRepository.delete(id);
      if (affected.affected === 0) {
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
