import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { Car } from '../../models/car.model';
import { CardRepository } from '../../repositories/card.repository';

@Injectable({ providedIn: 'root' })
export class GetRecentCarsUseCase implements UseCase<void, Car> {

  constructor(private carRepository: CardRepository) {}

  execute(params: void): Observable<Car> {
   return this.carRepository.GetRecentCars();
  }
}
