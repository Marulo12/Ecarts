import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { HomeFullImageComponent } from './components/home-full-image/home-full-image.component';
import { HomeBrandsComponent } from './components/home-brands/home-brands.component';
import { HomeStadisticsComponent } from './components/home-stadistics/home-stadistics.component';
import { HomeListRecentCarsComponent } from './components/home-list-recent-cars/home-list-recent-cars.component';
import { PrimeNGModule } from 'src/app/styles/prime-ng/prime-ng.module';
import { HomeAboutUsComponent } from './pages/home-about-us/home-about-us.component';
import { HomeContactsComponent } from './pages/home-contacts/home-contacts.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeServicesComponent,
    HomeFullImageComponent,
    HomeBrandsComponent,
    HomeStadisticsComponent,
    HomeListRecentCarsComponent,
    HomeAboutUsComponent,
    HomeContactsComponent
  ],
  imports: [SharedModule, HomeRoutingModule, PrimeNGModule],
})
export class HomeModule {}
