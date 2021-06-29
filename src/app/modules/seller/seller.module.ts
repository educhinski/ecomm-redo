import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellerRegisterComponent } from './seller-register/seller-register.component';

const routes: Routes = [
  { path: 'register/:step', component: SellerRegisterComponent },
  { path: 'register', redirectTo: 'register/1', pathMatch: 'full' },
  { path: '', component: SellerHomeComponent },
];

@NgModule({
  declarations: [SellerHomeComponent, SellerRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SellerModule {}
