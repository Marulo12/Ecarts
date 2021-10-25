import { Observable } from 'rxjs';

export abstract class ModelCarRepository {
  abstract GetModels(paramm: string): Observable<string[]>;  
}