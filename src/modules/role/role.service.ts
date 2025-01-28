import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleEntity as RoleEntity } from './entities/role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioRoleEntity } from './entities/usuarioRole.entity';
import { CreateRoleUsuarioDto } from './dto/usuario-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
    @InjectRepository(UsuarioRoleEntity)
    private usuarioRoleRepository: Repository<UsuarioRoleEntity>,
  ) {}

  create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    return this.roleRepository.save(createRoleDto);
  }

  createRoleUsuario(
    createRoleUsuarioDto: CreateRoleUsuarioDto,
  ): Promise<UsuarioRoleEntity> {
    console.log(createRoleUsuarioDto);
    return this.usuarioRoleRepository.save(createRoleUsuarioDto);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(idRol: number): Promise<RoleEntity> {
    return this.roleRepository.findOneBy({ idRol });
  }

  findByRole(nameRol: string): Promise<RoleEntity> {
    return this.roleRepository.findOneBy({ name: nameRol });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update(id, updateRoleDto);
  }

  async remove(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
