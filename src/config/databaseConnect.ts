import { ConnectionOptions } from 'typeorm';

const databaseConnect: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'familly_budget',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsTableName: 'famillyBudget_migrations',
  synchronize: true,
};
export default databaseConnect;
