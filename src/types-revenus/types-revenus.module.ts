import { Module } from '@nestjs/common';
import { TypesRevenusService } from './types-revenus.service';
import { TypesRevenusController } from './types-revenus.controller';

@Module({
  controllers: [TypesRevenusController],
  providers: [TypesRevenusService],
})
export class TypesRevenusModule {}
