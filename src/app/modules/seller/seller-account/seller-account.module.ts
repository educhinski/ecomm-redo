import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SellerAccountComponent } from './seller-account.component';
import { SellerRecentComponent } from './seller-recent/seller-recent.component';
import { SellerInboxComponent } from './seller-inbox/seller-inbox.component';
import { SellerReviewsComponent } from './seller-reviews/seller-reviews.component';
import { SellerCreditComponent } from './seller-credit/seller-credit.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { SellerAddressComponent } from './seller-address/seller-address.component';
import { SellerPasswordComponent } from './seller-password/seller-password.component';
import { SellerNewsletterComponent } from './seller-newsletter/seller-newsletter.component';
import { SellerStockComponent } from './seller-stock/seller-stock.component';
import { SellerSalesComponent } from './seller-sales/seller-sales.component';
import { SellerChatComponent } from './seller-inbox/seller-chat/seller-chat.component';
import { SellerChatListComponent } from './seller-inbox/seller-chat-list/seller-chat-list.component';

const routes: Routes = [
  { path: '', component: SellerAccountComponent },
  { path: 'sales', component: SellerSalesComponent },
  // { path: 'inbox/chat', component: SellerChatComponent },
  {
    path: 'inbox',
    component: SellerInboxComponent,
    children: [
      { path: '', component: SellerChatListComponent },
      { path: 'chat', component: SellerChatComponent },
    ],
  },
  { path: 'reviews', component: SellerReviewsComponent },
  { path: 'credit', component: SellerCreditComponent },
  { path: 'stock', component: SellerStockComponent },
  { path: 'recent', component: SellerRecentComponent },
  { path: 'details', component: SellerDetailsComponent },
  { path: 'address', component: SellerAddressComponent },
  { path: 'password', component: SellerPasswordComponent },
  { path: 'newsletter', component: SellerNewsletterComponent },
];

@NgModule({
  declarations: [
    SellerAccountComponent,
    SellerRecentComponent,
    SellerInboxComponent,
    SellerReviewsComponent,
    SellerCreditComponent,
    SellerDetailsComponent,
    SellerAddressComponent,
    SellerPasswordComponent,
    SellerNewsletterComponent,
    SellerStockComponent,
    SellerSalesComponent,
    SellerChatComponent,
    SellerChatListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SellerAccountModule {}
