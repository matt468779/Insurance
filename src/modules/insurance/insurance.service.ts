import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Insurance } from 'src/entities/insurance.entity';
import { CollectionQuery, QueryConstructor } from 'libs/collection-query/src';
import { DataResponseFormat } from 'libs/api-data/src';

@Injectable()
export class InsuranceService {
  constructor(
    @InjectRepository(Insurance)
    private readonly insuranceRepository: Repository<Insurance>,
  ) {}

  async create(createInsuranceDto: CreateInsuranceDto): Promise<Insurance> {
    const insurance = this.insuranceRepository.create(createInsuranceDto);
    return this.insuranceRepository.save(insurance);
  }

  async findAll(): Promise<Insurance[]> {
    return this.insuranceRepository.find();
  }

  async findOne(id: number): Promise<Insurance> {
    return this.insuranceRepository.findOne({ where: { id: id } });
  }

  async update(
    id: number,
    updateInsuranceDto: UpdateInsuranceDto,
  ): Promise<Insurance> {
    const insurance = await this.insuranceRepository.preload({
      id,
      ...updateInsuranceDto,
    });

    if (!insurance) {
      throw new NotFoundException(`Insurance with ID '${id}' not found`);
    }

    // Handle the update of the personsEntitledToUseOrDrive field separately
    if (updateInsuranceDto.personsEntitledToUseOrDrive) {
      insurance.personsEntitledToUseOrDrive =
        updateInsuranceDto.personsEntitledToUseOrDrive;
    }

    return this.insuranceRepository.save(insurance);
  }

  async remove(id: number): Promise<void> {
    await this.insuranceRepository.delete(id);
  }

  async getQuery(query: CollectionQuery) {
    const insurances = await QueryConstructor.constructQuery(
      this.insuranceRepository,
      query,
    ).getMany();

    const response = new DataResponseFormat();
    response.data = insurances;
    response.count = await this.insuranceRepository.count();
    return response;
  }
}
