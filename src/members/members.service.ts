import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import * as bcrypt from 'bcrypt';
import { LoggerMessage } from 'src/utility/logerMessage';


@Injectable()
export class MembersService {
  private readonly logger = new Logger(MembersService.name)
  
  private readonly loggerMessage = new LoggerMessage()
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) { }

  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    this.logger.log(this.loggerMessage.createObjectMessage("Member"))
    const passWordHash: string = await bcrypt.hash(createMemberDto.password, 10)
    createMemberDto = {
      ...createMemberDto,
      password: passWordHash,
    }
    try {
      const member = await this.memberRepository.save(createMemberDto);
      this.logger.log(this.loggerMessage.successCreateMessage("Member"))
      return { ...member, password: undefined };
    } catch (error) {
      this.logger.error(this.loggerMessage.logerErrorMessage("#create()", error.message))
      throw new InternalServerErrorException();
    }
  }

  async findOneMember(username: string): Promise<Member> {
    this.logger.log(this.loggerMessage.searchObjectMessage("Member", "#findOneMember()"))
    try {
      const member: Member = await this.memberRepository.findOne({ email: username })
      this.logger.log(this.loggerMessage.objectfoundMessage("Member", "#findOneMember()"))
      if (!member) {
        this.logger.error(this.loggerMessage.logerErrorMessage("#findOneMember()", "Member not exist"))
        throw new NotFoundException();
      }

      return member;
    } catch (error) {
      this.logger.error(this.loggerMessage.logerErrorMessage("#findOneMember()", error.message))
      throw new InternalServerErrorException();

    }
  }

  async findAll(): Promise<Member[]> {
    this.logger.log(this.loggerMessage.searchObjectMessage("All Member", "#findAll()"))
    try {
      const members = await this.memberRepository.find();
      if (members.length <= 0) {
        throw new NotFoundException();
      }
      members.map((member) => (member.password = undefined));
      this.logger.log(this.loggerMessage.objectfoundMessage("All Member", "#findAll()"))
      return members;
    } catch (error) {
      this.logger.error(this.loggerMessage.logerErrorMessage("#findAll()", error.message))
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number): Promise<UpdateMemberDto> {
    this.logger.log(this.loggerMessage.searchObjectMessage("Member", "#findOne()"))
    try {
      const member: Member = await this.memberRepository.findOne(id);
      if (member) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...restMember } = member;
        this.logger.log(this.loggerMessage.objectfoundMessage("Member", "#findOne()"))
        return restMember;
      } else {
        this.logger.error(this.loggerMessage.objectNotFound("Member","#findone()"))
        throw new NotFoundException();
      }
    } catch (error) {
      this.logger.error(this.loggerMessage.logerErrorMessage("#findAll()", error.message))
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: number,
    updateMemberDto: UpdateMemberDto,
  ): Promise<UpdateResult> {
    this.logger.log(this.loggerMessage.searchObjectMessage("Member", "#update()"))
    try {
      const affected: UpdateResult = await this.memberRepository.update(
        id,
        updateMemberDto,
      );
      if (affected.affected === 1) {
        this.logger.log(this.loggerMessage.updateObjectMessage("#update()","Member"))
        return affected;
      } else {
        throw new NotFoundException();
      }
    } catch (error) {
      this.logger.error(this.loggerMessage.logerErrorMessage("#create()", error.message))
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
