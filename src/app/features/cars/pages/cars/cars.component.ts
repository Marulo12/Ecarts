import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarService } from '../../service/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(public carService: CarService) {
    this.subscription = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.carService.cleanFilters();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.carService.subjectCar$.subscribe((r) => {
        this.carService.cars.push(r);
      })
    );
    this.carService.getCars();
  }

  searchForFilters(event: any) {
    this.carService.queryParamms.isPopular = event.isPopular;
    this.carService.queryParamms.isOffer = event.isOffer;
    this.carService.queryParamms.yearFrom = event.yearRange[0];
    this.carService.queryParamms.yearUntil = event.yearRange[1];
    this.carService.queryParamms.filterText = event.filterText;
    this.carService.getCars();
  }

  searchForCategory(event: any) {          
    this.carService.queryParamms.idModels = event.idModels;
    this.carService.getCars();
  }
}
