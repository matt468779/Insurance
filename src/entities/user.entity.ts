import { Role } from 'src/modules/role/role.enum';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Insurance } from './insurance.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isEmailConfirmed: boolean;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @ManyToMany(() => Insurance)
  @JoinTable()
  insurances: Insurance[];
}
