import { NgModule } from '@angular/core';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './pages/cars/cars.component';
import { SharedModule } from '../../shared';
import { PrimeNGModule } from 'src/app/styles/prime-ng/prime-ng.module';
import { FiltersCarsComponent } from './components/filters-cars/filters-cars.component';
import { CategoriesCarsComponent } from './components/categories-cars/categories-cars.component';


@NgModule({
  declarations: [
    CarsComponent,
    FiltersCarsComponent,
    CategoriesCarsComponent
  ],
  imports: [
    SharedModule, 
    CarsRoutingModule,
    PrimeNGModule
  ]
})
export class CarsModule { }
