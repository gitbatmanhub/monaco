import { IsEmail, IsOptional, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  name: string = 'Udate';
  @IsEmail()
  email: string;
  @IsString()
  @Min(8)
  password: string;
  @IsOptional()
  @IsString()
  role: string = 'admin';
  created_at: Date = new Date();
  updated_at: Date = new Date();
  deleted_at: Date = new Date();
}
