import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, scan, take } from 'rxjs/operators';
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
    return of(...Cars).pipe(
      filter((x) => x.year == currentYear),
      take(6)
    );
  }

  GetCars(paramms: QueryParammsCar): Observable<Car> {
    let cars = Cars;

    if (paramms.idBranchs.length > 0) {
      cars = cars.filter((c) => paramms.idBranchs?.includes(c.id));
    }

    if (paramms.models.length > 0) {
      cars = cars.filter((c) => paramms.models?.includes(c.model));
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
    return of(...cars);
  }
}
