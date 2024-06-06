import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LibroEntity } from './libro.entity';
import { DeleteResult, FindOneOptions, Repository } from 'typeorm';
import CrearDTO from './dto/crearLibro.dto';
import { AutorEntity } from 'src/autor/autor.entity';
import ActualizarLibroDTO from './dto/actualizarLibro.dto';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(LibroEntity)
    private libroServicio: Repository<LibroEntity>,
    @InjectRepository(AutorEntity)
    private autorServicio: Repository<AutorEntity>,
  ) {}

  async crearNuevoLibro(crearDTO: CrearDTO): Promise<LibroEntity> {
    const id = crearDTO.autorId;
    const options: FindOneOptions<AutorEntity> = {
      where: { id },
    };
    const autorEntity = await this.autorServicio.findOne(options);
    if (!autorEntity) {
      throw new NotFoundException(`Autor con ID ${id} no encontrada`);
    }

    const libroEntity = new LibroEntity(
      crearDTO.titulo,
      crearDTO.publicacion,
      crearDTO.genero,
      autorEntity,
    );
    console.log(libroEntity);

    return this.libroServicio.save(libroEntity);
  }

  async obtenerDetalleLibro(libroId: number): Promise<LibroEntity> {
    const id = libroId;
    const options: FindOneOptions<LibroEntity> = {
      where: { id },
    };
    const libroEntity = await this.libroServicio.findOne(options);
    if (!libroEntity) {
      throw new NotFoundException(`libro con ID ${id} no encontrada`);
    }
    return libroEntity;
  }

  async obtenerLibros(): Promise<LibroEntity[]> {
    return this.libroServicio.find();
  }

  async actualizarLibro(
    actualizarDTO: ActualizarLibroDTO,
  ): Promise<LibroEntity> {
    const id = actualizarDTO.id;
    const options: FindOneOptions<LibroEntity> = {
      where: { id },
    };
    const libroEntity = await this.libroServicio.findOne(options);
    if (!libroEntity) {
      throw new NotFoundException(`libro con ID ${id} no encontrada`);
    }
    libroEntity.titulo = actualizarDTO.titulo;
    libroEntity.publicacion = actualizarDTO.publicacion;
    libroEntity.genero = actualizarDTO.genero;

    return this.libroServicio.save(libroEntity);
  }

  async eliminarLibro(libroId: number): Promise<DeleteResult> {
    const id = libroId;
    const options: FindOneOptions<LibroEntity> = {
      where: { id },
    };
    const libroEntity = await this.libroServicio.findOne(options);
    if (!libroEntity) {
      throw new NotFoundException(`libro con ID ${id} no encontrada`);
    }
    return this.libroServicio.delete(libroId);
  }
}
