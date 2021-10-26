import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CategoryCarService } from '../../service/category-car.service';

@Component({
  selector: 'app-categories-cars',
  templateUrl: './categories-cars.component.html',
  styleUrls: ['./categories-cars.component.scss']
})
export class CategoriesCarsComponent implements OnInit {

  categories: TreeNode[];
  constructor(private categoryCarService: CategoryCarService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryCarService.getCategories().subscribe(
      r => {
        this.categories.push({
          label: r.brandName,
          children: r.models.map(m => {
            return <TreeNode>{
            label:m.modelName
            }
          })
        })
      }
    );
  }

}
