import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ModelCarService } from '../../service/model-car.service';

@Component({
  selector: 'app-filters-cars',
  templateUrl: './filters-cars.component.html',
  styleUrls: ['./filters-cars.component.scss'],
})
export class FiltersCarsComponent implements OnInit, OnDestroy {
  yearRange: number[];
  isPopular: boolean;
  isOffert: boolean;
  filterText: string;
  resultText: string[];
  @Output() filters = new EventEmitter();

  constructor(private modelCarService: ModelCarService) {
    this.yearRange = [2000, new Date().getFullYear()];
    this.isOffert = false;
    this.isPopular = false;
    this.filterText = '';
    this.resultText = [];
  }

  ngOnDestroy(): void {
    this.cleanFilters();
  }

  ngOnInit(): void {}

  cleanFilters() {
    this.yearRange = [2000, new Date().getFullYear()];
    this.isOffert = false;
    this.isPopular = false;
    this.filterText = '';
    this.search();
  }

  search() {
    this.filters.emit({
      yearRange: this.yearRange,
      isPopular: this.isPopular,
      isOffer: this.isOffert,
      filterText: this.filterText
    });
  }

  autocomplete(event: any){
    this.modelCarService.getModels(event.query).subscribe(r => {
      this.resultText = r;
  });
  }
}
