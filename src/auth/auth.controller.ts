import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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

  @HttpCode(HttpStatus.OK)
  @Post('sigIn')
  async sigIn(@Body() CreateUserDto: Record<string, any>) {
    const { email, pass } = CreateUserDto;
    return await this.authService.sigIn(email, pass);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(req): string {
    return 'Accediste a la ruta profile';
  }
}
