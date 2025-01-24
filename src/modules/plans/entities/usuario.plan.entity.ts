import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { PlanEntity } from './plan.entity';

@Entity('usuario_plan')
export class UsuarioPlanEntity {
  @PrimaryGeneratedColumn()
  idUsuarioPlan: number;

  @Column()
  @ManyToOne(() => UserEntity, (usuarioPlan) => usuarioPlan.idUsuario)
  idUsuario: number;

  @Column()
  @ManyToOne(() => PlanEntity, (usuarioPlan) => usuarioPlan.idPlan)
  idPlan: number;

  @Column()
  fechaAdquisicion: Date = new Date();

  @Column()
  fechaVencimiento: Date = new Date();

  @Column()
  status: boolean;
}
