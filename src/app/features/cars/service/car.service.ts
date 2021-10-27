import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from 'src/app/core';
import { GetCarsUseCase } from 'src/app/core/useCases/car/getCars.usecase';
import { QueryParammsCar } from 'src/app/core/useCases/car/query-paramms-car';

@Injectable({ providedIn: 'root' })
export class CarService {
  cars: Array<Car>;
  queryParamms: QueryParammsCar;
  subjectCar$: Subject<Car>;
  observableCars$ = new Observable<Car>();
  
  constructor(private getCarsUseCase: GetCarsUseCase) {
    this.cars = [];
    this.subjectCar$ = new Subject<Car>();
    this.queryParamms = {     
      idModels: [],
      yearFrom: 0,
      yearUntil: new Date().getFullYear(),
      isPopular: false,
      isOffer: false,
      filterText: ''
    };
  }

  getCars() {   
    this.cars = []; 
    this.observableCars$ = this.getCarsUseCase.execute(this.queryParamms);

    if(this.subjectCar$.isStopped){
      this.subjectCar$ = new Subject<Car>();
    }

    this.observableCars$.subscribe( r => {
      this.subjectCar$.next(r);
    });    
  }

  cleanFilters() {
    this.queryParamms = {    
      idModels: [],
      yearFrom: 0,
      yearUntil: new Date().getFullYear(),
      isPopular: false,
      isOffer: false,
      filterText: ''
    };
  }
}
