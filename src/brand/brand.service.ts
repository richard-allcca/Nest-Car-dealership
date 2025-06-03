import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Brand A',
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Brand B',
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Brand C',
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    // },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return brand;
  }

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const newBrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);

    if (!brandDb) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }

    this.brands = this.brands.map((brand) => {
      // brand.updatedAt = new Date().getTime();
      if (brand.id === id) {
        brandDb = {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
        };
        return brandDb;
      }
      return brand;
    });
    return brandDb;
  }

  remove(id: string) {
    const brand = this.findOne(id);

    if (!brand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }

    this.brands = this.brands.filter((brand) => brand.id !== id);
    return { deleted: true };
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
