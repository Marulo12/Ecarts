import { NgModule } from '@angular/core';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { SharedModule } from 'primeng/api';
import { PrimeNGModule } from 'src/app/styles/prime-ng/prime-ng.module';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [    
    SharedModule,
    PrimeNGModule,
    ShoppingCartRoutingModule
  ]
})

export class ShoppingCartModule { }
