import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class ActualizarAutorDTO {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsDate()
  nacimiento: Date;

  @IsNumber()
  id: number;
}
