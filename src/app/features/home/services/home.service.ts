import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/core/models/brand.model';
import { GetAllBrandsUseCase } from 'src/app/core/useCases/brand/getAllBrand.usecase';
import { GetRecentCarsUseCase } from 'src/app/core/useCases/car/getRecentCars.usecase';

@Injectable({ providedIn: 'root' })
export class HomeService {
    
  constructor(private getAllBrandsUseCase: GetAllBrandsUseCase, private getRecentCarsUseCase: GetRecentCarsUseCase) {}

  GetAllBrands(): Observable<Brand> {
    return this.getAllBrandsUseCase.execute();
  }

  GetRecentCars(){
    return this.getRecentCarsUseCase.execute();
  }
}
