import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userServices: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_toke: string }> {
    const user = await this.userServices.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('No se ha encontrado el usuario');
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_toke: await this.jwtService.signAsync(payload),
    };
  }
}
