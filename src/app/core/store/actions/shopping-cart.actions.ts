import { createAction, props } from '@ngrx/store';
import { Car } from '../..';

export const addCarToCart = createAction(
  '[ShoppingCart Component] Add car to Cart',
  props<{ car: Car }>()
);
export const sumCarToCart = createAction(
  '[ShoppingCart Component] Sum car to Cart',
  props<{ idCar: number }>()
);
export const discountCarToCart = createAction(
  '[ShoppingCart Component] Discount car to Cart',
  props<{ idCar: number }>()
);
export const removeCarToCart = createAction(
  '[ShoppingCart Component] Remove car to Cart',
  props<{ idCar: number }>()
);
export const GetShoppingCart = createAction(
  '[ShoppingCart Component]  Get Shopping Cart'
);
