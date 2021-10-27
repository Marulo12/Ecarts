import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { ShoppingCartState } from 'src/app/core/store/states/shopping-cart.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  
  constructor(private messageService: MessageService, private store: Store<{shoppingCart: ShoppingCartState}>) {}

  ngOnInit(): void {}

  pay() {
    this.messageService.add({
      severity: 'warn',
      detail: 'Disculpe, el servicio esta temporalmente inhabilitado.',
      summary: 'Notificación',
      key: 'warning',
    });
  }
}
