import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dividend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  holdingId: number;

  @Column('decimal')
  amount: number;

  @Column()
  paymentDate: Date;
} 