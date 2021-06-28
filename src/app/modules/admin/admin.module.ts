import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [{ path: '', component: AdminHomeComponent }];

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
