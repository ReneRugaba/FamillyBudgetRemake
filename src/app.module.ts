import { Module } from '@nestjs/common';
import { MembersModule } from './members/members.module';
import { RevenusModule } from './revenus/revenus.module';
import { DepensesModule } from './depenses/depenses.module';
import { TypesRevenusModule } from './types-revenus/types-revenus.module';
import { SoldesRevenusDepensesModule } from './soldes-revenus-depenses/soldes-revenus-depenses.module';
import { CathegoriesDepensesModule } from './cathegories-depenses/cathegories-depenses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { HomeModule } from './home/home.module';




@Module({
  imports: [
    MembersModule,
    RevenusModule,
    DepensesModule,
    TypesRevenusModule,
    SoldesRevenusDepensesModule,
    CathegoriesDepensesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    HomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
