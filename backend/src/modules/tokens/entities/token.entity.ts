import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyId: number;

  @Column('decimal')
  minimumPrice: number;

  @Column()
  status: string;
} 