import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plan')
export class PlanEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(() => PlanEntity, (plan) => plan.idPlan)
  idPlan: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @Column()
  status: boolean;

  @Column()
  valor: number;

  @Column()
  created_at: Date = new Date();

  @Column()
  updated_at: Date = new Date();

  @Column()
  limitClients: number;

  @Column()
  limitReservas: number;
}
