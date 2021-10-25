import { Action, createReducer, on } from '@ngrx/store';
import {
  addCarToFavorite,
  GetFavoritesCars,
  removeCarToFavorite,
} from '../actions/favorite-car.actions';
import { FavoriteCarState } from '../states/favorite-car.state';

const initialState: FavoriteCarState = {
  cars: [],
};

const _favoriteCarReducer = createReducer(
  initialState,
  on(addCarToFavorite, (state, { car }) => {
    const existCar = state.cars.filter((c) => c.id == car.id);

    if (existCar.length > 0) {
      return state;
    }

    return { cars: [...state.cars, car] };
  }),
  on(removeCarToFavorite, (state, { idCar }) => {
    let cars = state.cars.filter(c => c.id != idCar);      
    return { cars };
  }),
  on(GetFavoritesCars, (state) => {
    return state;
  })
);

export function favoriteCarReducer(
  state: FavoriteCarState | undefined,
  action: Action
) {
  return _favoriteCarReducer(state, action);
}
