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

  @Column({ nullable: true, default: true })
  status: boolean = true;

  @Column({ nullable: true, default: new Date() })
  @IsDate()
  ultimoIngreso: Date = new Date();

  @Column({ nullable: true, default: false })
  @IsBoolean()
  deleted: boolean = false;

  @Column()
  password: string;

  @Column({ nullable: true, default: new Date() })
  updated_at: Date = new Date();
}
