import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingCart } from '../..';
import {
  addCarToCart,
  GetShoppingCart,
  removeCarToCart,
} from '../actions/shopping-cart.actions';
import { ShoppingCartState } from '../states/shopping-cart.state';

const initialState: ShoppingCartState = {
  cars: [],
};

const _shoppingCartReducer = createReducer(
  initialState,
  on(addCarToCart, (state, { car }) => {
    let cars = [...state.cars];

    if (cars.length === 0) {
      cars.push({
        car,
        quantity: 1,
      });

      return { cars };
    }

    cars.forEach((item, index) => {
      if (item.car.id == car.id) {
        cars.splice(index, 1);
        cars.push({
          car,
          quantity: item.quantity + 1,
        });
      } else {
        cars.push({
          car,
          quantity: 1,
        });
      }
    });
   
    return { cars };
  }),

  on(removeCarToCart, (state, { idCar }) => {
    let cars = state.cars;

    cars.forEach((item, index) => {
      if (item.car.id == idCar) {
        cars.splice(index, 1);
        cars.push({
          car: item.car,
          quantity: item.quantity - 1,
        });
      }

      if (item.quantity === 0) {
        cars.splice(index, 1);
      }
    });

    return { cars };
  }),

  on(GetShoppingCart, (state) => {
    return state;
  })
);

export function shoppingCartReducer(
  state: ShoppingCartState | undefined,
  action: Action
) {
  return _shoppingCartReducer(state, action);
}
