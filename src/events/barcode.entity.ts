import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('barcodes')
export class Barcode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  barcode: string;
}
