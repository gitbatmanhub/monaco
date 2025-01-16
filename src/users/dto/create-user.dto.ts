import { IsEmail, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  @Min(8)
  password: string;
  @IsString()
  role: string;
  created_at: Date = new Date();
  updated_at: Date = new Date();
  deleted_at: Date = new Date();
}
