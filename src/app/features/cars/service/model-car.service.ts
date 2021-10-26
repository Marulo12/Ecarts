import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetModelsCarUseCase } from 'src/app/core/useCases/modelCar/getModels.usecase';

@Injectable({ providedIn: 'root' })
export class ModelCarService {

  constructor(private getModelsCarUseCase: GetModelsCarUseCase) {}

  getModels(param: string): Observable<string[]> {
      return this.getModelsCarUseCase.execute(param);
  }
}
