import { ConnectionOptions } from 'typeorm';

const databaseConnect: ConnectionOptions = {
  type: 'postgres',
  host: process.env.HOST_DB,
  port: Number(process.env.PORT_AP),
  username: process.env.USER_DB,
  password: 'root',
  database: 'familly_budget',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  dropSchema: true,
};
export default databaseConnect;
