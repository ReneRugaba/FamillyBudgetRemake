import { Module } from '@nestjs/common';
import { MembersModule } from './members/members.module';
import { RevenusModule } from './revenus/revenus.module';
import { DepensesModule } from './depenses/depenses.module';
import { TypesRevenusModule } from './types-revenus/types-revenus.module';
import { SoldesRevenusDepensesModule } from './soldes-revenus-depenses/soldes-revenus-depenses.module';
import { CathegoriesDepensesModule } from './cathegories-depenses/cathegories-depenses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConnect from './config/databaseConnect';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './members/jwtConstants';



@Module({
  imports: [
    MembersModule,
    RevenusModule,
    DepensesModule,
    TypesRevenusModule,
    SoldesRevenusDepensesModule,
    CathegoriesDepensesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.HOST_DB,
      port: Number(process.env.PORT_AP),
      username: process.env.USER_DB,
      password: process.env.PASSWORD_APP,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
