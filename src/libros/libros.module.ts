import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibroEntity } from './libro.entity';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';
import { AutorServicio } from 'src/autor/autor.service';
import { AutorEntity } from 'src/autor/autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LibroEntity, AutorEntity])],
  controllers: [LibroController],
  providers: [LibroService, AutorServicio],
})
export class LibrosModule {}
