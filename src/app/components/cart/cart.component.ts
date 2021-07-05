import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = 3;
  count = 1;

  constructor() {}

  ngOnInit(): void {}

  minus(): void {
    if (this.count > 1) --this.count;
  }

  plus(): void {
    ++this.count;
  }
}
