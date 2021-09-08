import { Module } from '@nestjs/common';
import { RevenusService } from './revenus.service';
import { RevenusController } from './revenus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revenu } from './entities/revenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Revenu])],
  controllers: [RevenusController],
  providers: [RevenusService],
})
export class RevenusModule {}
