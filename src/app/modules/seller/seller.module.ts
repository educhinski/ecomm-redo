import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SellerDefaultComponent } from './seller-default/seller-default.component';

const routes: Routes = [
  {
    path: '',
    component: SellerDefaultComponent,
    children: [
      { path: 'register/:step', component: SellerRegisterComponent },
      { path: 'register', redirectTo: 'register/1', pathMatch: 'full' },
      { path: '', component: SellerHomeComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SellerHomeComponent,
    SellerRegisterComponent,
    SellerDefaultComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SellerModule {}
