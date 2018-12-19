// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ReportsComponent } from './reports.component';




// Components Routing
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReportsRoutingModule
    
  ],
  declarations: [
    ReportsComponent

  ]
})
export class ReportsModule { }
