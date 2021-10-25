import {Observable} from 'rxjs';
import { Brand } from '../models/brand.model';

export abstract class BrandRepository {
    abstract getAllBrands(): Observable<Brand>;
}