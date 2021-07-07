import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { OverviewComponent } from './overview/overview.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { AdminReviewsComponent } from './admin-reviews/admin-reviews.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminDefaultComponent } from './admin-default/admin-default.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminAddDeleteComponent } from './admin-add-delete/admin-add-delete.component';
import { AdminPasswordComponent } from './admin-password/admin-password.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { CustomerTableComponent } from './admin-customers/customer-table/customer-table.component';
import { AdminSellersComponent } from './admin-sellers/admin-sellers.component';
import { SellerTableComponent } from './admin-sellers/seller-table/seller-table.component';
import { AdminAdminsComponent } from './admin-admins/admin-admins.component';
import { AdminTableComponent } from './admin-admins/admin-table/admin-table.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDefaultComponent,
    children: [
      {
        path: 'account',
        component: AdminHomeComponent,
        children: [
          { path: 'overview', component: OverviewComponent },
          { path: 'reviews', component: AdminReviewsComponent },
          { path: 'profile', component: AdminProfileComponent },
          { path: 'customers', component: AdminCustomersComponent },
          { path: 'sellers', component: AdminSellersComponent },
          { path: 'admins', component: AdminAdminsComponent },
          { path: 'orders', component: AdminOrdersComponent },
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
        ],
      },
      { path: 'login', component: AdminLoginComponent },
      { path: 'register', component: AdminRegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    AdminHomeComponent,
    CardComponent,
    AnnualSalesChartComponent,
    NavComponent,
    OverviewComponent,
    AdminReviewsComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminDefaultComponent,
    AdminProfileComponent,
    AdminAddDeleteComponent,
    AdminPasswordComponent,
    AdminCustomersComponent,
    CustomerTableComponent,
    AdminSellersComponent,
    SellerTableComponent,
    AdminAdminsComponent,
    AdminTableComponent,
    AdminOrdersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule,
  ],
})
export class AdminModule {}
