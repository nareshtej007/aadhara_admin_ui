// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CustomerListComponent } from './customerList.component';

// Forms Component
import { CustomerProfileComponent } from './customerProfile.component';


// Components Routing
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule
    
  ],
  declarations: [
    CustomerListComponent,
    CustomerProfileComponent

  ]
})
export class CustomerModule { }
