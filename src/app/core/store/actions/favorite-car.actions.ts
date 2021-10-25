import { createAction, props } from '@ngrx/store';
import { Car } from '../..';

export const addCarToFavorite = createAction(
  '[Favorite Component] Add car to favorites',
  props<{ car: Car }>()
);
export const removeCarToFavorite = createAction(
  '[Favorite Component] Remove car to favorites',
  props<{ idCar: number }>()
);
export const GetFavoritesCars = createAction(
  '[Favorite Component]  Get  favorites cars'
);
