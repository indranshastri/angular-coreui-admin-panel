import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { ListFaqsComponent } from './containers/list-faqs/list-faqs.component';
import { FaqsComponent } from './faqs.component';

@NgModule({
  imports: [
    CommonModule,
    FaqsRoutingModule
  ],
  declarations: [ListFaqsComponent, FaqsComponent]
})
export class FaqsModule { }
