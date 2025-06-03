import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { BrandModule } from 'src/brand/brand.module';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule, BrandModule],
})
export class SeedModule {}
