import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../core';
@Component({
  selector: 'app-dataviewcars',
  templateUrl: './dataviewcars.component.html',
  styleUrls: ['./dataviewcars.component.scss'],
})
export class DataviewCarsComponent implements OnInit {
  @Input() cars: Array<Car>;
  @Input() hiddenDataViewLayoutOptions: boolean;
  @Input() layout: string;
  @Input() showButtonAddFavorite: boolean;
  @Input() showPaginator: boolean;
  constructor() {
    this.showPaginator = false;
    this.showButtonAddFavorite = true;
    this.cars = [];
    this.hiddenDataViewLayoutOptions = true;
    this.layout = 'grid';
  }

  ngOnInit(): void {}
}
