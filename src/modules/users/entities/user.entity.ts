import { IsBoolean, IsDate, IsEmail } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(() => UserEntity, (user) => user.idUsuario)
  idUsuario: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsBoolean()
  status: boolean;

  @Column()
  @IsDate()
  ultimoIngreso: Date = new Date();

  @Column()
  @IsBoolean()
  deleted: boolean;

  @Column()
  password: string;

  @Column({ nullable: true, default: new Date() })
  updated_at: Date = new Date();
}
