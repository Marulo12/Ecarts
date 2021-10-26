import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { Category } from '../../models/category.model';
import { CategoryRepository } from '../../repositories/category.repository';

@Injectable({
  providedIn: 'root',
})
export class GetCategoryUseCase implements UseCase<void, Category> {

  constructor(private categoryRepository: CategoryRepository) {}

    execute(params: void): Observable<Category> {
        return this.categoryRepository.GetCategory();
    }

  
}