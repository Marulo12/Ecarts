import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs/operators';
import { addCarToCart } from '../actions/shopping-cart.actions';

@Injectable()
export class ShoppingCartEffects {
  addShoppingCartCar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addCarToCart),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            detail: 'Agregado al carrito!!',
            key: 'success',
            summary: 'Notificación',
          });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}
}
