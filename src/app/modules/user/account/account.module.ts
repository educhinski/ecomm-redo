import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AccountHomeComponent } from './account-home/account-home.component';
import { OrdersComponent } from './orders/orders.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreditComponent } from './credit/credit.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';
import { RecentComponent } from './recent/recent.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddressComponent } from './address/address.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PasswordComponent } from './password/password.component';
import { CheckoutComponent } from './orders/checkout/checkout.component';
import { ConfirmedComponent } from './orders/checkout/confirmed/confirmed.component';
import { DeliveryComponent } from './orders/checkout/delivery/delivery.component';
import { PaymentComponent } from './orders/checkout/payment/payment.component';
import { SummaryComponent } from './orders/checkout/summary/summary.component';

const routes: Routes = [
  { path: 'orders/checkout/confirmed', component: ConfirmedComponent },
  {
    path: 'orders/checkout',
    component: CheckoutComponent,
    children: [
      { path: 'delivery', component: DeliveryComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'summary', component: SummaryComponent },
      { path: '', redirectTo: 'delivery', pathMatch: 'full' },
    ],
  },
  { path: 'orders', component: OrdersComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'credit', component: CreditComponent },
  { path: 'saved-items', component: SavedItemsComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'details', component: AccountDetailsComponent },
  { path: 'address', component: AddressComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: '', component: AccountHomeComponent },
];

@NgModule({
  declarations: [
    AccountHomeComponent,
    OrdersComponent,
    InboxComponent,
    ReviewsComponent,
    CreditComponent,
    SavedItemsComponent,
    RecentComponent,
    AccountDetailsComponent,
    AddressComponent,
    NewsletterComponent,
    PasswordComponent,
    CheckoutComponent,
    ConfirmedComponent,
    DeliveryComponent,
    PaymentComponent,
    SummaryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountModule {}
