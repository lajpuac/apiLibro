import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'libros_leysi',
  password: 'leysi',
  database: 'db_libros',
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['./src/migrations/*.ts'],
});
