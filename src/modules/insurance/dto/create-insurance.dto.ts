import {
  IsNotEmpty,
  IsDateString,
  IsNumber,
  ArrayNotEmpty,
} from 'class-validator';
import { User } from 'src/entities/user.entity';

export class CreateInsuranceDto {
  @IsNotEmpty()
  certificateNumber: string;

  @IsDateString()
  issueDate: Date;

  @IsNotEmpty()
  nameOfInsured: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  plateNo: string;

  @IsNotEmpty()
  engineNo: string;

  @IsNotEmpty()
  chasisNo: string;

  @IsNotEmpty()
  vehicleType: string;

  @IsNumber()
  carryingCapacityLoad: number;

  @IsNumber()
  carryingCapacityPerson: number;

  @IsNotEmpty()
  insurancePolicyNo: string;

  @IsDateString()
  policyPeriodFrom: Date;

  @IsDateString()
  policyPeriodTo: Date;

  @IsNotEmpty()
  conditionsForPolicyIssued: string;

  @ArrayNotEmpty()
  personsEntitledToUseOrDrive: User[];

  @IsNotEmpty()
  nameOfIssuer: string;

  @IsNotEmpty()
  addressOfIssuer: string;

  @IsNumber()
  premiumTariff: number;

  @IsNumber()
  insuranceFundTariff: number;
}
