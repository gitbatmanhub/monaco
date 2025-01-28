import { IsNotEmpty } from 'class-validator';

export class CreateRoleUsuarioDto {
  @IsNotEmpty()
  idUsuario: number;

  @IsNotEmpty()
  idRole: number;
}
