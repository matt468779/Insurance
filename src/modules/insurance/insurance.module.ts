import { Module } from '@nestjs/common';
import { InsuranceService } from './insurance.service';
import { InsuranceController } from './insurance.controller';
import { Insurance } from 'src/entities/insurance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [InsuranceController],
  providers: [InsuranceService],
  exports: [InsuranceService],
  imports: [TypeOrmModule.forFeature([Insurance])],
})
export class InsuranceModule {}
