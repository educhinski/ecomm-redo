import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerInvoicesComponent } from './seller-invoices.component';

describe('SellerInvoicesComponent', () => {
  let component: SellerInvoicesComponent;
  let fixture: ComponentFixture<SellerInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
