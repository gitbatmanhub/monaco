import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { bcryptCompare, bcryptService } from './bcrypt.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateRoleUsuarioDto } from '../role/dto/usuario-role.dto';
import { RoleService } from '../role/role.service';
import { RoleCodes } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private userServices: UsersService,
    private jwtService: JwtService,
    private roleService: RoleService,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ access_toke: string }> {
    //const saltOrRounds = 10;
    const user = await this.userServices.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('No se ha encontrado el usuario');
    }

    const compare = await bcryptCompare(password, user.password);

    console.log(compare);

    const payload = { sub: user.idUsuario, email: user.email };

    return {
      access_toke: await this.createJwtToken(payload),
    };
  }

  async sigIn(email: string, password: string) {
    const User = await this.userServices.findOneByEmail(email);

    if (User) {
      throw new NotFoundException('El usuario ya existe');
    }

    password = await bcryptService(password);

    const newUser: CreateUserDto = {
      email,
      password,
    };

    const UserRegister = await this.userServices.create(newUser);

    const payload = { sub: UserRegister.idUsuario, email: UserRegister.email };

    const newUserRole: CreateRoleUsuarioDto = {
      idRole: RoleCodes[0].CODEUSER,
      idUsuario: UserRegister.idUsuario,
    };

    await this.roleService.createRoleUsuario(newUserRole);

    return { access_toke: await this.createJwtToken(payload) };
  }

  createJwtToken(payload: any) {
    return this.jwtService.signAsync(payload);
  }

  /*async assignRoleToUser(
    user: UserEntity,
    roleCode: string,
  ): Promise<UserEntity> {
    // Buscar el rol por su código
    const role = await this.roleService.findByRole(roleCode);
    if (!role) {
      throw new Error(`Role with code ${roleCode} not found`);
    }

    user.role = role;
    // Guardar los cambios en la base de datos
    return user.save();
  }*/
}
