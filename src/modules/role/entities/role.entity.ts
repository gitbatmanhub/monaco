import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(() => RoleEntity, (role) => role.idRol)
  idRol: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  status: boolean;

  @Column({ default: new Date() })
  created_at: Date = new Date();

  @Column({ default: new Date() })
  updated_at: Date = new Date();
}
