import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Insurance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  certificateNumber: string;

  @Column()
  issueDate: Date;

  @Column()
  nameOfInsured: string;

  @Column({ type: 'jsonb', nullable: true })
  address: string | string;

  @Column()
  plateNo: string;

  @Column()
  engineNo: string;

  @Column()
  chasisNo: string;

  @Column()
  vehicleType: string;

  @Column()
  carryingCapacityLoad: number;

  @Column()
  carryingCapacityPerson: number;

  @Column()
  insurancePolicyNo: string;

  @Column()
  policyPeriodFrom: Date;

  @Column()
  policyPeriodTo: Date;

  @Column()
  conditionsForPolicyIssued: string;

  @ManyToMany(() => User)
  @JoinTable()
  personsEntitledToUseOrDrive: User[];

  @Column()
  nameOfIssuer: string;

  @Column()
  addressOfIssuer: string;

  @Column()
  premiumTariff: number;

  @Column()
  insuranceFundTariff: number;
}
