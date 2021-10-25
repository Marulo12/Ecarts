import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Car } from 'src/app/core';
import { FavoriteCarState } from 'src/app/core/store/states/favorite-car.state';

@Component({
  selector: 'app-favorite-car',
  templateUrl: './favorite-car.component.html',
  styleUrls: ['./favorite-car.component.scss'],
})
export class FavoriteCarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  cars$: Observable<Array<Car>>;
  cars: Array<Car>;
  display: boolean;
  constructor(private store: Store<{ favorite: FavoriteCarState }>) {
    this.subscription = new Subscription();
    this.cars$ = this.store.select((s) => s.favorite.cars);
    this.cars = [];
    this.display = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getCars();
  }

  public show() {
    this.display = true;
  }

  private getCars() {
    this.cars$.subscribe((r) => {
      this.cars = r;
    });
  }
}
