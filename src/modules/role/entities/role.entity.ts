import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  //@OneToMany(() => RoleEntity, (role) => role.idRol)
  idRol: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @Column({ default: new Date() })
  created_at: Date = new Date();

  @Column({ default: new Date() })
  updated_at: Date = new Date();
}
