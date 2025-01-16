import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() CreateUserDto: Record<string, any>) {
    const { email, password } = CreateUserDto;
    const user = await this.authService.signIn(email, password);
    if (!user) {
      throw new NotFoundException('Usuario no registrado');
    }
    return user;
  }
}
