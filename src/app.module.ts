import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosModule } from './libros/libros.module';
import { AutorModule } from './autor/autor.module';
import { RutaController } from './ruta/ruta.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'libros_leysi',
        password: 'leysi',
        database: 'db_libros',
        autoLoadEntities: true,
      }),
    }),
    LibrosModule,
    AutorModule,
  ],
  controllers: [AppController, RutaController],
  providers: [AppService],
})
export class AppModule {}
