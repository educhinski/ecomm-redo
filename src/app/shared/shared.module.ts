import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductGridComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HeaderComponent, FooterComponent, ProductGridComponent],
})
export class SharedModule {}
