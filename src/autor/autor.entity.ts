//import { libroEntity } from 'src/libros/libro.entity';
import { LibroEntity } from 'src/libros/libro.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('autor')
export class AutorEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ type: 'varchar', unique: true })
  nombre: string;

  @Column({ type: 'varchar', unique: true })
  apellido: string;

  @Column({ type: 'date' })
  nacimiento: Date;

  @OneToMany(() => LibroEntity, (libroEntity) => libroEntity.autorId, {
    cascade: true,
  })
  libros: LibroEntity[];

  constructor(nombre: string, apellido: string, nacimiento: Date) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
  }
}
