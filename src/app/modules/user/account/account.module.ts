import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccountHomeComponent } from './account-home/account-home.component';

const routes: Routes = [{ path: '', component: AccountHomeComponent }];

@NgModule({
  declarations: [AccountHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountModule {}
