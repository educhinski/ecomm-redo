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
  productsData: any[] = [];
  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data: any) => {
      this.productsData = data.data;
      this.products = this.getProductList(this.productsData);
    });
  }

  getProductList(data: any) {
    let products: any[] = [];
    for (const datum in data) {
      if (Object.prototype.hasOwnProperty.call(data, datum)) {
        const product = data[datum].data;

        // add each item to products array
        products.push({
          id: product.product_id,
          name: product.attributes.product_name,
          price: product.attributes.product_price,
          currency: product.attributes.currency,
          description: product.attributes.product_details,
          discountPercent: product.attributes.discount_percent,
          rating: product.attributes.productReviews.meta.review_count,
          imagePath: product.attributes.cover_image.data.attributes.path,
        });
      }
    }
    return products;
  }
}
