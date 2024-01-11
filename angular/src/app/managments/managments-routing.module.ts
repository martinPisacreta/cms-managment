import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagmentsComponent } from './managments.component';
import { ManagmentListComponent } from './managment-list/managment-list.component';
import { ManagmentDetailComponent } from './managment-detail/managment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ManagmentsComponent,
    children: [{ path: '', component: ManagmentListComponent }],
  },
  {
    path: 'managments/:id',
    component: ManagmentsComponent,
    children: [{ path: '', component: ManagmentDetailComponent  }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagmentsRoutingModule { }
