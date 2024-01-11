import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentsRoutingModule } from './managments-routing.module';
import { ManagmentsComponent } from './managments.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ManagmentsComponent
  ],
  imports: [
    CommonModule,
    ManagmentsRoutingModule,
    SharedModule,
  ]
})
export class ManagmentsModule { }
