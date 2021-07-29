import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { categories, categoriesHeadings } from '../../helpers/categories';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  categories = categories;
  headings = categoriesHeadings;
  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }
}
