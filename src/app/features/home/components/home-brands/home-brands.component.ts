import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/core/models/brand.model';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-home-brands',
  templateUrl: './home-brands.component.html',
  styleUrls: ['./home-brands.component.scss'],
})
export class HomeBrandsComponent implements OnInit, OnDestroy {
  brands: Array<Brand>;
  responsiveOptions: Array<any>;
  subscription: Subscription;
  constructor(private homeService: HomeService) {
    this.subscription = new Subscription();
    this.brands = [];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();  
  }

  ngOnInit(): void {
    this.GetAllBrands();
  }

  GetAllBrands() {
    this.subscription.add(
      this.homeService.GetAllBrands().subscribe((r) => {
        this.brands.push(r);
      })
    );
  }
}
