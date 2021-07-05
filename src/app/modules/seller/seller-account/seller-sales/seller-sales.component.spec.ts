import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSalesComponent } from './seller-sales.component';

describe('SellerSalesComponent', () => {
  let component: SellerSalesComponent;
  let fixture: ComponentFixture<SellerSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
