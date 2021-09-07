import { Module } from '@nestjs/common';
import { SoldesRevenusDepensesService } from './soldes-revenus-depenses.service';
import { SoldesRevenusDepensesController } from './soldes-revenus-depenses.controller';

@Module({
  controllers: [SoldesRevenusDepensesController],
  providers: [SoldesRevenusDepensesService],
})
export class SoldesRevenusDepensesModule {}
