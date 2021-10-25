import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FavoriteCarEffects } from './store/effects/favorite-car.effect';
import { favoriteCarReducer } from './store/reducers/favorite-car.reducers';
@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ favorite: favoriteCarReducer }),
    EffectsModule.forRoot([FavoriteCarEffects]),
  ],
})
export class CoreModule {}
