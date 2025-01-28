import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constants';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() CreateUserDto: Record<string, any>) {
    const { email, password } = CreateUserDto;
    const user = await this.authService.login(email, password);
    if (!user) {
      throw new NotFoundException('Usuario no registrado');
    }
    return user;
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('sigIn')
  async sigIn(@Body() CreateUserDto: Record<string, any>) {
    const { email, password } = CreateUserDto;
    return await this.authService.sigIn(email, password);
  }

  @Get('profile')
  getProfile(req): string {
    return 'Accediste a la ruta profile';
  }
}
