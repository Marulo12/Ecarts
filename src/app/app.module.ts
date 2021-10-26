import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  SharedModule,
  ToastNotificationsComponent,
} from './shared';
import { MessageService} from 'primeng/api';
import { CoreModule } from './core/core.module';
import { BrandRepository } from './core/repositories/brand.repository';
import { BrandDataRepository } from './data/repositories/brand.repository';
import { CardRepository } from './core/repositories/card.repository';
import { CarDataRepository } from './data/repositories/car.repository';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGModule } from './styles/prime-ng/prime-ng.module';
import { ModelCarRepository } from './core/repositories/model-car.repository';
import { ModelCarDataRepository } from './data/repositories/model-car.repository';
import { CategoryRepository } from './core/repositories/category.repository';
import { CategoryDataRepository } from './data/repositories/category.repository';

@NgModule({
  declarations: [
    AppComponent,   
    ToastNotificationsComponent    
  ],
  imports: [CommonModule, BrowserModule , BrowserAnimationsModule, PrimeNGModule ,SharedModule, CoreModule, AppRoutingModule],
  providers: [
    MessageService,
    { provide: BrandRepository, useClass: BrandDataRepository },
    { provide: CardRepository, useClass: CarDataRepository },
    { provide: ModelCarRepository, useClass: ModelCarDataRepository },
    { provide: CategoryRepository, useClass: CategoryDataRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
