import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-list-recent-cars',
  templateUrl: './home-list-recent-cars.component.html',
  styleUrls: ['./home-list-recent-cars.component.scss'],
})
export class HomeListRecentCarsComponent implements OnInit {
  cars: Array<Car>;

  constructor(private homeService: HomeService) {
    this.cars = [];
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
   this.homeService.GetRecentCars().subscribe(
     r => {
       this.cars.push(r);
     }
   );
  }
}
