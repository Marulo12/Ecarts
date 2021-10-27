import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CategoryCarService } from '../../service/category-car.service';

@Component({
  selector: 'app-categories-cars',
  templateUrl: './categories-cars.component.html',
  styleUrls: ['./categories-cars.component.scss'],
})
export class CategoriesCarsComponent implements OnInit {
  categories: TreeNode[];
  selectedCategories: TreeNode[];
  @Output() filters = new EventEmitter();
  constructor(private categoryCarService: CategoryCarService) {
    this.categories = [];
    this.selectedCategories = [];
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryCarService.getCategories().subscribe((r) => {
      const parent: TreeNode = {
        label: r.brandName,
        data: r.idBrand,
        selectable: true,
        children: [],
      };

      r.models.forEach((item) => {
        const children: TreeNode = {
          label: item.modelName,
          data: item.idModel,
          selectable: true,
          parent,
        };
        parent.children?.push(children);
      });

      this.categories.push(parent);
    });
  }

  nodeSelect() {
    this.filters.emit(this.convertTofilters());
  }

  nodeUnselect() {
    this.filters.emit(this.convertTofilters());
  }

  convertTofilters() {
    const idModels = this.selectedCategories
      .filter((b) => b.parent != undefined)
      .map((b) => b.data);
    return { idModels };
  }
}
