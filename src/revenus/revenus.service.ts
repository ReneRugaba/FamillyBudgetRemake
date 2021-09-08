import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';
import { Revenu } from './entities/revenu.entity';

@Injectable()
export class RevenusService {
  constructor(
    @InjectRepository(Revenu)
    private revenuRepository: Repository<Revenu>,
  ) {}

  async create(createRevenuDto: CreateRevenuDto): Promise<Revenu> {
    try {
      const revenu: Revenu = await this.revenuRepository.save(createRevenuDto);
      return revenu;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<Revenu[]> {
    try {
      const revenu: Revenu[] = await this.revenuRepository.find();
      if (revenu.length === 0) {
        throw new NotFoundException();
      }
      return revenu;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<Revenu> {
    try {
      const revenu: Revenu = await this.revenuRepository.findOne(id);
      console.log(revenu);
      if (!revenu) {
        throw new NotFoundException();
      }
      return revenu;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: number,
    updateRevenuDto: UpdateRevenuDto,
  ): Promise<UpdateResult> {
    try {
      const affected: UpdateResult = await this.revenuRepository.update(
        id,
        updateRevenuDto,
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
      const affected: DeleteResult = await this.revenuRepository.delete(id);
      if (affected.affected !== 1) {
        throw new NotFoundException();
      }
      return affected;
    } catch (error) {
      if (error.response.statusCode === 404) {
        throw new NotFoundException();
      }
      throw new InternalServerErrorException();
    }
  }
}
