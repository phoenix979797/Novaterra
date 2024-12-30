import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyId: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  status: string;
} 