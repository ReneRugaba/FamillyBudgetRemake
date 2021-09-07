import { Module } from '@nestjs/common';
import { CathegoriesDepensesService } from './cathegories-depenses.service';
import { CathegoriesDepensesController } from './cathegories-depenses.controller';

@Module({
  controllers: [CathegoriesDepensesController],
  providers: [CathegoriesDepensesService],
})
export class CathegoriesDepensesModule {}
