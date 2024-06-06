import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { AutorController } from './autor.controller';
import { AutorServicio } from './autor.service';
import { LibroService } from 'src/libros/libro.service';
import { LibroEntity } from 'src/libros/libro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutorEntity, LibroEntity])],
  controllers: [AutorController],
  providers: [AutorServicio, LibroService],
})
export class AutorModule {}
