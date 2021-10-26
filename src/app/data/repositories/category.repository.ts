import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Category, CategoryItem } from 'src/app/core/models/category.model';
import { CategoryRepository } from 'src/app/core/repositories/category.repository';
import Brands from '../list-brands.json';
import Cars from '../list-cars.json';

@Injectable({ providedIn: 'root' })
export class CategoryDataRepository extends CategoryRepository {

    constructor() {
        super();
    }

    GetCategory(): Observable<Category> {
        let categories = Brands.map(b => {
            return <Category>{
                idBrand: b.id,
                brandName: b.name,
                models: []
            }
        });

        let models = Cars.map(m => {
            return <CategoryItem>{
                idBrand: m.idBrand,
                modelName: m.model
            }
        });

        categories.forEach(item => {
            models.forEach(iitem => {
                if (item.idBrand == iitem.idBrand)
                    item.models.push(iitem);
            })
        });

     return from(categories);
    }
}
