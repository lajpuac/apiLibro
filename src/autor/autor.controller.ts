import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AutorServicio } from './autor.service';
import CrearAutorDTO from './dto/crearAutor.dto';
import { AutorEntity } from './autor.entity';
import ActualizarAutorDTO from './dto/actualizarAutor.dto';
import { DeleteResult } from 'typeorm';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('autor')
@Controller('autor')
export class AutorController {
  constructor(private autorSercivio: AutorServicio) {}

  @Post()
  @ApiBody({ type: CrearAutorDTO })
  @ApiResponse({
    status: 200,
    description: 'Libro creado exitosamente.',
    type: AutorEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async crearNuevoAutor(
    @Body() nuevoAutor: CrearAutorDTO,
  ): Promise<AutorEntity> {
    return this.autorSercivio.crearNuevoAutor(nuevoAutor);
  }

  @Get()
  async obtenerAutores(): Promise<AutorEntity[]> {
    return this.autorSercivio.obtenerAutores();
  }

  @Get(':id')
  async obtenerAutor(@Param('id') id: number): Promise<AutorEntity> {
    return this.autorSercivio.obtenerAutor(id);
  }

  @Put()
  async actualizarAutor(
    @Body() actualizarAutor: ActualizarAutorDTO,
  ): Promise<AutorEntity> {
    return this.autorSercivio.actualizarAutor(actualizarAutor);
  }

  @Delete(':id')
  async eliminarAutor(@Param('id') id: number): Promise<DeleteResult> {
    return this.autorSercivio.eliminarAutor(id);
  }
}
