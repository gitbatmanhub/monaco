import { Body, Controller, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { CreateRoleUsuarioDto } from './dto/usuario-role.dto';
import { Public } from '../auth/constants';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Public()
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Post('roleEntity')
  createRoleEntity(@Body() createRoleUsuarioDto: CreateRoleUsuarioDto) {
    return this.roleService.createRoleUsuario(createRoleUsuarioDto);
  }

  /*@Get()
  findAll() {
    return this.roleService.findAll();
  }
  
   */
}
