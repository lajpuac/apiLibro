import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { DeleteResult, FindOneOptions, Repository } from 'typeorm';
import CrearDTO from './dto/crearAutor.dto';
import ActualizarAutorDTO from './dto/actualizarAutor.dto';
import { LibroEntity } from 'src/libros/libro.entity';

@Injectable()
export class AutorServicio {
  constructor(
    @InjectRepository(AutorEntity)
    private autorServicio: Repository<AutorEntity>,
    @InjectRepository(LibroEntity)
    private libroServicio: Repository<LibroEntity>,
  ) {}

  crearNuevoAutor(crearDTO: CrearDTO): Promise<AutorEntity> {
    const autorEntity = new AutorEntity(
      crearDTO.nombre,
      crearDTO.apellido,
      crearDTO.nacimiento,
    );
    return this.autorServicio.save(autorEntity);
  }

  async obtenerAutores(): Promise<AutorEntity[]> {
    return this.autorServicio.find();
  }

  async obtenerAutor(id: number): Promise<AutorEntity> {
    const options: FindOneOptions<AutorEntity> = {
      where: { id },
    };
    const autorEntity = await this.autorServicio.findOne(options);
    if (!autorEntity) {
      throw new NotFoundException(`autor con ID ${id} no encontrada`);
    }

    return autorEntity;
  }

  async actualizarAutor(
    actualizarDTO: ActualizarAutorDTO,
  ): Promise<AutorEntity> {
    const id = actualizarDTO.id;
    const options: FindOneOptions<AutorEntity> = {
      where: { id },
    };
    const autorEntity = await this.autorServicio.findOne(options);
    if (!autorEntity) {
      throw new NotFoundException(`autor con ID ${id} no encontrada`);
    }

    autorEntity.nombre = actualizarDTO.nombre;
    autorEntity.apellido = actualizarDTO.apellido;
    autorEntity.nacimiento = actualizarDTO.nacimiento;

    return this.autorServicio.save(autorEntity);
  }

  async eliminarAutor(id: number): Promise<DeleteResult> {
    const options: FindOneOptions<AutorEntity> = {
      where: { id },
    };
    const autorEntity = await this.autorServicio.findOne(options);
    if (!autorEntity) {
      throw new NotFoundException(`autor con ID ${id} no encontrada`);
    }
    const autorId = autorEntity;
    const optionslibro: FindOneOptions<LibroEntity> = {
      where: { autorId },
    };
    const libroEntity = await this.libroServicio.findOne(optionslibro);
    this.libroServicio.delete(libroEntity.id);

    console.log(autorEntity.libros);
    return this.autorServicio.delete(id);
  }
}
