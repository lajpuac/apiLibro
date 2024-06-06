import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export default class CrearLibroDTO {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsDate()
  @IsNotEmpty()
  publicacion: Date;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsNotEmpty()
  autorId: number;
}
