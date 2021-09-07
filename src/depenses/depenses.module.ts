import { Module } from '@nestjs/common';
import { DepensesService } from './depenses.service';
import { DepensesController } from './depenses.controller';

@Module({
  controllers: [DepensesController],
  providers: [DepensesService],
})
export class DepensesModule {}
