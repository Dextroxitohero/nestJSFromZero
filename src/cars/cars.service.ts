import { Body, Delete, Get, Injectable, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

interface cars {
    id: number;
    name: string;
    model: string;
}

@Injectable()
export class CarsService {
    private cars = [
        { id: 1, name: 'Ford', model: 'F150' },
        { id: 2, name: 'Honda', model: 'Civic' },
        { id: 3, name: 'Toyota', model: 'Camry' },
        { id: 4, name: 'Chevrolet', model: 'Malibu' },
        { id: 5, name: 'Nissan', model: 'Altima' },
        { id: 6, name: 'Hyundai', model: 'Sonata' },
        { id: 7, name: 'Kia', model: 'Optima' },
        { id: 8, name: 'Volkswagen', model: 'Passat' },
        { id: 9, name: 'Audi', model: 'A4' },
        { id: 10, name: 'BMW', model: '328i' },
        { id: 11, name: 'Mercedes-Benz', model: 'C300' }
    ];

    @Get()
    findAllCars() {
        return this.cars;
    }
    
    @Get(':id')
    findCarById(@Param('id') id: number) {
        if (!id) {
            throw new NotFoundException('Car not found');
        }
        
        const car = this.cars.find((car) => car.id === id);
        
        if (!car) {
            throw new NotFoundException('Car not found with id: ' + id);
        }

        return car;
    }

    @Post()
    createCar(car: any) {
        this.cars.push({ id: this.cars.length + 1, name: car, model: 'Unknown' });
        return car;
    }

    @Put(':id')
    updateCar(@Param('id', ParseIntPipe) id: number, @Body() car: any) {
        this.cars[id] = { id: id, name: car, model: 'Unknown' };
        return car;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        this.cars.splice(id, 1);
        return { message: 'Car deleted successfully' };
    }

}
