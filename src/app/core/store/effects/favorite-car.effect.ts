import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs/operators';
import { Car } from '../..';
import {
  addCarToFavorite,
  removeCarToFavorite,
} from '../actions/favorite-car.actions';
import { FavoriteCarState } from '../states/favorite-car.state';

@Injectable()
export class FavoriteCarEffects {
  cars = Array<Car>();
  addFavoriteCar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addCarToFavorite),
        concatLatestFrom(() => this.store.select((s) => s.favorite)),
        tap(([, state]) => {
          if (this.cars.length == state.cars.length) {
            this.messageService.add({
              severity: 'info',
              detail: 'Ya estaba agregado en favoritos',
              key: 'info',
              summary: 'Notificación',
            });
          } else {
            this.messageService.add({
              severity: 'success',
              detail: 'Agregado a favoritos!!',
              key: 'success',
              summary: 'Notificación',
            });
            this.cars = state.cars;
          }
        })
      ),
    { dispatch: false }
  );

  removeFavoriteCar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(removeCarToFavorite),
        concatLatestFrom(() => this.store.select((s) => s.favorite)),
        tap(([, state]) => {
          if (this.cars.length != state.cars.length) {
            this.messageService.add({
              severity: 'info',
              detail: 'Se quito de favoritos.',
              key: 'info',
              summary: 'Notificación',
            });
            this.cars = state.cars;
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ favorite: FavoriteCarState }>,
    private messageService: MessageService
  ) {}
}
