import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const passWordHash: string = await bcrypt.hash(createMemberDto.password,10)
    createMemberDto = {
      ...createMemberDto,
      password: passWordHash,
    }
    try {
      const member = await this.memberRepository.save(createMemberDto);
      return {...member, password:undefined};
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOneMember(username: string): Promise<Member> {
    try {
      const member: Member = await this.memberRepository.findOne({email:username})
      if (!member) {
        throw new NotFoundException();
      }
     
        return member;
    } catch (error) {
      if (error.response.statusCode===404) {
        throw new NotFoundException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findAll(): Promise<Member[]> {
    try {
      const members = await this.memberRepository.find();
      members.map((member)=>(member.password=undefined));
      if (members.length <= 0) {
        throw new NotFoundException();
      }
      return members;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<UpdateMemberDto> {
    try {
      const member: Member = await this.memberRepository.findOne(id);
      if (member) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...restMember } = member;
        return restMember;
      } else {
        throw new NotFoundException();
      }
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: number,
    updateMemberDto: UpdateMemberDto,
  ): Promise<UpdateResult> {
    try {
      const affected: UpdateResult = await this.memberRepository.update(
        id,
        updateMemberDto,
      );
      if (affected.affected === 1) {
        return affected;
      } else {
        throw new NotFoundException();
      }
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    try {
      const affected: DeleteResult = await this.memberRepository.delete(id);
      if (affected.affected === 1) {
        return affected;
      } else {
        throw new NotFoundException();
      }
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
