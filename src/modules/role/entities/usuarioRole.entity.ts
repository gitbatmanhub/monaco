import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEntity } from './role.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('usuario_role')
export class UsuarioRoleEntity {
  @PrimaryGeneratedColumn()
  idUsuarioRole: number;

  @Column()
  @ManyToOne(() => RoleEntity, (role) => role.idRol)
  idRole: number;

  @Column()
  @ManyToOne(() => UserEntity, (user) => user.idUsuario)
  idUsuario: number;
}
