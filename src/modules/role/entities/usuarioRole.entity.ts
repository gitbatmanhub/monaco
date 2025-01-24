import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('usuario_role')
export class UsuarioRole {
  @PrimaryGeneratedColumn()
  idUsuarioRole: number;

  @Column()
  @ManyToOne(() => Role, (role) => role.idRol)
  idRole: number;

  @Column()
  @ManyToOne(() => UserEntity, (user) => user.idUsuario)
  idUsuario: number;
}
