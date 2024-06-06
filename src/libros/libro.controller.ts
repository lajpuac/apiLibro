import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CrearLibroDTO from './dto/crearLibro.dto';
import { LibroEntity } from './libro.entity';
import { LibroService } from './libro.service';
import ActualizarLibroDTO from './dto/actualizarLibro.dto';
import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('libro')
@Controller('libro')
export class LibroController {
  constructor(private libroService: LibroService) {}

  //derterminar si es get, post, pull

  @Post()
  async nuevoLibro(@Body() nuevoLibro: CrearLibroDTO): Promise<LibroEntity> {
    return this.libroService.crearNuevoLibro(nuevoLibro);
  }

  @Get(':id')
  async obtenerLibro(@Param('id') libroId: number): Promise<LibroEntity> {
    return this.libroService.obtenerDetalleLibro(libroId);
  }

  @Get()
  async obtenerLista(): Promise<LibroEntity[]> {
    return this.libroService.obtenerLibros();
  }

  @Put()
  async actualizarLibro(
    @Body() actualizarDTO: ActualizarLibroDTO,
  ): Promise<LibroEntity> {
    return this.libroService.actualizarLibro(actualizarDTO);
  }

  @Delete(':id')
  async eliminarLibro(@Param('id') libroId: number): Promise<DeleteResult> {
    return this.libroService.eliminarLibro(libroId);
  }
}
