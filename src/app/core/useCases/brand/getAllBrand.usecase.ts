import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { Brand } from '../../models/brand.model';
import { BrandRepository } from '../../repositories/brand.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllBrandsUseCase implements UseCase<void, Brand> {

  constructor(private brandRepository: BrandRepository) {}

  execute(params: void): Observable<Brand> {
    return this.brandRepository.getAllBrands();
  }
}
