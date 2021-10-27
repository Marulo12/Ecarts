import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FavoriteCarEffects } from './store/effects/favorite-car.effect';
import { ShoppingCartEffects } from './store/effects/shopping-cart.effects';
import { favoriteCarReducer } from './store/reducers/favorite-car.reducers';
import { shoppingCartReducer } from './store/reducers/shopping-cart.reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      favorite: favoriteCarReducer,
      shoppingCart: shoppingCartReducer,
    }),
    EffectsModule.forRoot([FavoriteCarEffects, ShoppingCartEffects]),
  ],
})
export class CoreModule {}
