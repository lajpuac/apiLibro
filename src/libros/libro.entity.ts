import { AutorEntity } from 'src/autor/autor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('libro')
export class LibroEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column({ type: 'varchar', unique: true })
  titulo: string;

  @Column({ type: 'date' })
  publicacion: Date;

  @Column({ type: 'varchar' })
  genero: string;

  @ManyToOne(() => AutorEntity, (autorEntity) => autorEntity.libros)
  @JoinColumn()
  autorId: AutorEntity;

  constructor(
    titulo: string,
    publicacion: Date,
    genero: string,
    autorId: AutorEntity,
  ) {
    this.titulo = titulo;
    this.publicacion = publicacion;
    this.genero = genero;
    this.autorId = autorId;
  }
}
