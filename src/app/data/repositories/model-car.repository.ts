import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { ModelCarRepository } from 'src/app/core/repositories/model-car.repository';
import Cars from '../list-cars.json';

@Injectable({ providedIn: 'root' })
export class ModelCarDataRepository extends ModelCarRepository {
  constructor() {
    super();
  }

  GetModels(paramm: string): Observable<string[]> {
    let models = [...new Set(Cars.map((c) => c.model))];

    if (paramm)
      models = models.filter((c) =>
        c
          .toLowerCase()
          .replace(' ', '')
          .includes(paramm.toLowerCase().replace(' ', ''))
      );
   
    return of(...models).pipe(toArray());
  }
}
