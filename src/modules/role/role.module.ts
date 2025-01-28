import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';
import { UsuarioRoleEntity } from './entities/usuarioRole.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity, UsuarioRoleEntity])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
