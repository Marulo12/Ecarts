import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { QueryParammsCar } from '../useCases/car/query-paramms-car';

export abstract class CardRepository {
  abstract GetCars(paramms: QueryParammsCar): Observable<Car>;
  abstract GetRecentCars(): Observable<Car>;
}
