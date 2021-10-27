import { Action, createReducer, on } from '@ngrx/store';
import { addCarToCart, GetShoppingCart, removeCarToCart } from '../actions/shopping-cart.actions';
import { ShoppingCartState } from '../states/shopping-cart.state';

const initialState: ShoppingCartState = {
  cars: [],
};

const _shoppingCartReducer = createReducer(
  initialState,
  on(addCarToCart, (state, { car }) => {
    let cars = state.cars;

    cars.forEach((item) => {
      if (item.car.id == car.id) {
        item.quantity++;
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
        item.quantity--;
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
