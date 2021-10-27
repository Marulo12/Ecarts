import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCart } from 'src/app/core';
import {
  discountCarToCart,
  removeCarToCart,
  sumCarToCart,
} from 'src/app/core/store/actions/shopping-cart.actions';
import { ShoppingCartState } from 'src/app/core/store/states/shopping-cart.state';

@Component({
  selector: 'app-shoping-cart-items',
  templateUrl: './shoping-cart-items.component.html',
  styleUrls: ['./shoping-cart-items.component.scss'],
})
export class ShopingCartItemsComponent implements OnInit, OnDestroy {
  cars: Array<ShoppingCart>;
  cars$: Observable<ShoppingCartState>;
  subscription: Subscription;

  constructor(private store: Store<{ shoppingCart: ShoppingCartState }>) {
    this.cars = [];
    this.cars$ = this.store.select((s) => s.shoppingCart);
    this.subscription = new Subscription();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.subscription.add(
      this.cars$.subscribe((r) => {
        this.cars = r.cars;
      })
    );
  }

  discountItem(idCar: number) {
    this.store.dispatch(discountCarToCart({ idCar }));
  }

  sumItem(idCar: number) {
    this.store.dispatch(sumCarToCart({ idCar }));
  }

  remoteToCart(idCar: number) {
    this.store.dispatch(removeCarToCart({ idCar }));
  }
}
