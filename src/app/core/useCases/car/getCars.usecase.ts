import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../..';
import { UseCase } from '../../base/use-case';
import { CardRepository } from '../../repositories/card.repository';
import { QueryParammsCar } from './query-paramms-car';

@Injectable({ providedIn: 'root' })
export class GetCarsUseCase implements UseCase<QueryParammsCar, Car> {
  constructor(private carRepository: CardRepository) {}

  execute(paramms: QueryParammsCar): Observable<Car> {
    return this.carRepository.GetCars(paramms);
  }
}
