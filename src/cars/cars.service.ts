import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'BMW',
    //   model: 'X5',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Mercedes',
    //   model: 'C-Class',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Audi',
    //   model: 'A4',
    // },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }

  createCar(newCarData: CreateCarDto) {
    const newCar = { id: uuid(), ...newCarData };
    const existingCar = this.cars.find(
      (car) => car.brand === newCar.brand && car.model === newCar.model,
    );

    if (existingCar) {
      throw new ConflictException(
        `Car with brand ${newCar.brand} and model ${newCar.model} already exists`,
      );
    }

    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, updateCarData: UpdateCarDto) {
    let carDb = this.getCarById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...car, ...updateCarData, id };
        return carDb;
      }
      return car;
    });

    return carDb;
  }

  deleteCar(id: string) {
    const car = this.getCarById(id);

    this.cars = this.cars.filter((car) => car.id !== id);

    return { message: `Car with ID ${car.id} deleted successfully` };
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
