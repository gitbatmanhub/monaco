import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from '../auth/constants';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  get usersService(): UsersService {
    return this._usersService;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this._usersService.create(createUserDto);
  }

  @Public()
  @Get()
  findAll() {
    return this._usersService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this._usersService.findOneByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this._usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._usersService.remove(+id);
  }
}
