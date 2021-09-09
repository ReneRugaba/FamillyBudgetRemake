import { Module } from '@nestjs/common';
import { SoldesRevenusDepensesService } from './soldes-revenus-depenses.service';
import { SoldesRevenusDepensesController } from './soldes-revenus-depenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoldesRevenusDepense } from './entities/soldes-revenus-depense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SoldesRevenusDepense])],
  controllers: [SoldesRevenusDepensesController],
  providers: [SoldesRevenusDepensesService],
})
export class SoldesRevenusDepensesModule {}
