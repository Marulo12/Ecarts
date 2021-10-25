import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from 'src/app/core';
import {
  addCarToFavorite,
  removeCarToFavorite,
} from 'src/app/core/store/actions/favorite-car.actions';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.scss'],
})
export class ViewCarComponent implements OnInit {
  @Input() car: Car;
  @Input() showButtonAddFavorite: boolean;
  constructor(private store: Store<{ favorite: Car }>) {
    this.showButtonAddFavorite = true;
    this.car = {
      id: 0,
      image: '',
      year: 0,
      model: '',
      idBrand: 0,
      description: '',
      isOffer: false,
      isPopular: false,
      rating: 0,
      price: 0,
    };
  }

  ngOnInit(): void {}

  addToFavorite() {
    this.store.dispatch(addCarToFavorite({ car: this.car }));
  }

  removeToFavorite() {
    this.store.dispatch(removeCarToFavorite({ idCar: this.car.id }));
  }
}
