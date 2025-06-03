import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';

@Module({
  controllers: [BrandController],
  providers: [BrandService],
  exports: [BrandService], // Exporting BrandService to be used in other modules
})
export class BrandModule {}
