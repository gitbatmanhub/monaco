import { IsEmail, IsString, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  @Min(8)
  password: string;

  @Column()
  @IsString()
  role: string;

  @Column({ nullable: true, default: new Date() })
  created_at: Date = new Date();

  @Column({ nullable: true, default: new Date() })
  updated_at: Date = new Date();

  @Column({ nullable: true, default: new Date() })
  deleted_at: Date = new Date();
}
