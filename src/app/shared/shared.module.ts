import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCarComponent } from './components/cars/view-car/view-car.component';
import { DataviewCarsComponent } from './components/dataviewcars/dataviewcars.component';
import { FavoriteCarComponent } from './components/favorite-car/favorite-car.component';
import { FooterComponent, HeaderComponent } from '.';
import { PrimeNGModule } from '../styles/prime-ng/prime-ng.module';


@NgModule({  
  entryComponents: [],
  declarations: [
    ViewCarComponent,
    DataviewCarsComponent,
    FavoriteCarComponent,
    HeaderComponent,
    FooterComponent   
  ],
  imports: [FormsModule, ReactiveFormsModule, PrimeNGModule],
  exports: [FormsModule, ReactiveFormsModule, DataviewCarsComponent, HeaderComponent, FooterComponent]
})
export class SharedModule {}
