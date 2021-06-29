import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccountHomeComponent } from './account-home/account-home.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: '', component: AccountHomeComponent },
];

@NgModule({
  declarations: [AccountHomeComponent, OrdersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountModule {}
