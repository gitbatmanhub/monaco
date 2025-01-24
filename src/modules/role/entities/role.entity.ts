import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Role, (role) => role.idRol)
  idRol: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @Column()
  created_at: Date = new Date();

  @Column()
  updated_at: Date = new Date();
}
