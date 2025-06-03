import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandService } from 'src/brand/brand.service';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandService,
  ) {}
  /**
   * Populates the database with seed data for cars.
   * This method is typically used to initialize the database with predefined data.
   * @returns A success message indicating that the database has been populated.
   */
  populateDb() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRAND_SEED);
    return 'Database has been populated successfully!';
  }
}
