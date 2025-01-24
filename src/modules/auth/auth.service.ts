import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { bcryptCompare, bcryptService } from './bcrypt.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userServices: UsersService,
    private jwtService: JwtService,
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

  async sigIn(email: string, pass: string) {
    const User = await this.userServices.findOneByEmail(email);

    if (User) {
      throw new NotFoundException('El usuario ya existe');
    }

    pass = await bcryptService(pass);

    const newUser: CreateUserDto = {
      name: 'Udate',
      email,
      role: 'admin',
      password: pass,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date(),
    };

    const UserRegister = await this.userServices.create(newUser);

    const payload = { sub: UserRegister.idUsuario, email: UserRegister.email };

    return { access_toke: await this.createJwtToken(payload) };
  }

  createJwtToken(payload: any) {
    return this.jwtService.signAsync(payload);
  }
}
