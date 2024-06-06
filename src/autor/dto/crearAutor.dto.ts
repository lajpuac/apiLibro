import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export default class CrearAutorDTO {
  @ApiProperty({ example: 'Leysi' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Ajpuac' })
  @IsString()
  apellido: string;

  @ApiProperty({ example: '1999-09-25' })
  @IsDate()
  nacimiento: Date;
}
