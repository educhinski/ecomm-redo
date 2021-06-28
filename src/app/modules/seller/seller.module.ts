import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: SellerHomeComponent }];

@NgModule({
  declarations: [SellerHomeComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SellerModule {}
