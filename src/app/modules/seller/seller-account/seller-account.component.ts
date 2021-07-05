import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrls: ['./seller-account.component.css'],
})
export class SellerAccountComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    console.log(this.router.url);
  }
}
