import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Investor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  walletAddress: string;
} 