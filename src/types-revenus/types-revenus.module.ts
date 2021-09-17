import { Module } from '@nestjs/common';
import { TypesRevenusService } from './types-revenus.service';
import { TypesRevenusController } from './types-revenus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesRevenu } from './entities/types-revenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypesRevenu])],
  controllers: [TypesRevenusController],
  providers: [TypesRevenusService],
})
export class TypesRevenusModule {}
