import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Brand } from 'src/app/core/models/brand.model';
import { BrandRepository } from 'src/app/core/repositories/brand.repository';
import Brands from '../list-brands.json';

@Injectable({providedIn: 'root'})
export class BrandDataRepository extends BrandRepository {

    constructor() { 
        super();
    }

    getAllBrands(): Observable<Brand> {
        return from(Brands);
    }
        
}