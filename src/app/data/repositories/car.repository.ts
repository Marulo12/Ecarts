import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Car } from 'src/app/core/models/car.model';
import { CardRepository } from 'src/app/core/repositories/card.repository';
import { QueryParammsCar } from 'src/app/core/useCases/car/query-paramms-car';
import Cars from '../list-cars.json';

@Injectable({ providedIn: 'root' })
export class CarDataRepository extends CardRepository {
  constructor() {
    super();
  }

  GetRecentCars(): Observable<Car> {
    const currentYear = new Date().getFullYear();
    return from(Cars).pipe(
      filter((x) => x.year == currentYear),
      take(6)
    );
  }

  GetCars(paramms: QueryParammsCar): Observable<Car> {
    let cars = Cars;
           
    if (paramms.idModels && paramms.idModels.length > 0) {
      cars = cars.filter((c) => paramms.idModels.includes(c.id));
    }
  
    if (paramms.isOffer) {
      cars = cars.filter((c) => c.isOffer == true);
    }

    if (paramms.isPopular) {
      cars = cars.filter((c) => c.isPopular == true);
    }

    if (paramms.filterText) {
      cars = cars.filter((c) =>
        c.model
          .toLowerCase()
          .replace(' ', '')
          .includes(paramms.filterText.toLowerCase().replace(' ', ''))
      );
    }

    cars = cars.filter(
      (c) => c.year >= paramms.yearFrom && c.year <= paramms.yearUntil
    );
    return from(cars);
  }
}
