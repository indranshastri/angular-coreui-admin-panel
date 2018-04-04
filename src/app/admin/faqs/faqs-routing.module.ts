import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFaqsComponent } from './containers/list-faqs/list-faqs.component';
import { FaqsComponent } from './faqs.component';

const routes: Routes = [
  {
    path: '',
    component: FaqsComponent,
    children: [
      {
        path: '',
        component: ListFaqsComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class FaqsRoutingModule { }
