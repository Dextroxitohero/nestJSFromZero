import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {


    constructor(
        private readonly carsService: CarsService
    ) { }


    @Get()
    getAllCars() {
        return this.carsService.findAllCars();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.findCarById(id);
    }

    @Post()
    createCar(@Body() car: any) {
        return this.carsService.createCar(car);
    }

    @Put(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() car: any) 
    {
        return this.carsService.updateCar(id, car);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.deleteCar(id);
    }


}
