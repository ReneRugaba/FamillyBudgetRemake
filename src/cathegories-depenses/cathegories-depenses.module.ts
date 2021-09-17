import { Module } from '@nestjs/common';
import { CathegoriesDepensesService } from './cathegories-depenses.service';
import { CathegoriesDepensesController } from './cathegories-depenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CathegoriesDepense } from './entities/cathegories-depense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CathegoriesDepense])],
  controllers: [CathegoriesDepensesController],
  providers: [CathegoriesDepensesService],
})
export class CathegoriesDepensesModule {}
