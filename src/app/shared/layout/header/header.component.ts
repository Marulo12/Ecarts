import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  itemsMenu: MenuItem[];
  @ViewChild('modalFavoriteCard', { static: false }) modalFavoriteCard: any;
  constructor() {
    this.itemsMenu = [];
  }

  ngOnInit(): void {
    this.addItemsMenu();
  }

  addItemsMenu() {
    this.itemsMenu = [
      {
        label: 'Home',
        routerLink: '/home'
      },
      {
        label: 'Automóviles',
        routerLink: '/cars'
      },
      {
        label: 'Quienes Somos',
        routerLink:'/about'
      },
      {
        label: 'Contáctenos',
        routerLink: '/contact'
      },
    ];
  }

  getFavoritesCards() {
    this.modalFavoriteCard.show();
  }
}
