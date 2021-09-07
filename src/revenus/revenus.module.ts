import { Module } from '@nestjs/common';
import { RevenusService } from './revenus.service';
import { RevenusController } from './revenus.controller';

@Module({
  controllers: [RevenusController],
  providers: [RevenusService],
})
export class RevenusModule {}
