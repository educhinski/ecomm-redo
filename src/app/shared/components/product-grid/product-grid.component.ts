import { Component, OnInit } from '@angular/core';
import { categories, categoriesHeadings } from '../../helpers/categories';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  categories = categories;
  headings = categoriesHeadings;

  constructor() {}

  ngOnInit(): void {}
}
