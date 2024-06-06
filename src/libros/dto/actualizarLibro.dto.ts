import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class ActualizarLibroDTO {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsDate()
  @IsNotEmpty()
  publicacion: Date;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsNumber()
  id: number;
}
