import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { GetCategoryUseCase } from 'src/app/core/useCases/category/getCategory.usecase';

@Injectable({providedIn: 'root'})
export class CategoryCarService {

    constructor(private getCategoryUseCase: GetCategoryUseCase) { }
    
    getCategories(): Observable<Category>{
        return this.getCategoryUseCase.execute();
    }
}