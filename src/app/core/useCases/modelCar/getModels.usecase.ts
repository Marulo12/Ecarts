import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ModelCarRepository } from '../../repositories/modelCar.repository';

@Injectable({
  providedIn: 'root',
})
export class GetModelsCarUseCase implements UseCase<string, string[]> {

  constructor(private modelCarRepository: ModelCarRepository) {}

  execute(params: string): Observable<string[]> {
    return this.modelCarRepository.GetModels(params);
  }
}