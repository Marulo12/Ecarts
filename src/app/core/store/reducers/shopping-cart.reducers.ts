import { isNgTemplate } from '@angular/compiler';
import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingCart } from '../..';
import {
  addCarToCart,
  discountCarToCart,
  GetShoppingCart,
  removeCarToCart,
  sumCarToCart,
} from '../actions/shopping-cart.actions';
import { ShoppingCartState } from '../states/shopping-cart.state';

const initialState: ShoppingCartState = {
  cars: [],
};

const _shoppingCartReducer = createReducer(
  initialState,
  on(addCarToCart, (state, { car }) => {
    let cars = [...new Set(state.cars)];

    if (cars.length === 0 || !cars.find((c) => c.car.id == car.id)) {
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
      }
    });

    return { cars };
  }),

  on(discountCarToCart, (state, { idCar }) => {
    let cars = [...new Set(state.cars)];
    let itemCart: any = {};

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].car.id == idCar) {
        itemCart = {
          car: cars[i].car,
          quantity: cars[i].quantity - 1,
        };

        if (itemCart.quantity < 1) {
          itemCart.quantity = 1;
        }
        cars[i] = itemCart;
      }
    }

    return { cars };
  }),

  on(sumCarToCart, (state, { idCar }) => {
    let cars = [...new Set(state.cars)];
    let itemCart: any = {};

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].car.id == idCar) {
        itemCart = {
          car: cars[i].car,
          quantity: cars[i].quantity + 1,
        };

        cars[i] = itemCart;
      }
    }

    return { cars };
  }),

  on(removeCarToCart, (state, { idCar }) => {
    let cars = [...new Set(state.cars)];

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].car.id == idCar) {
        cars.splice(i, 1);
      }
    }

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
