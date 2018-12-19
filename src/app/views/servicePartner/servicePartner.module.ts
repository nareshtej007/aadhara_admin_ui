// Angular
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { SalonComponent } from './salon.component';

// Forms Component
import { SalonListComponent } from './salonList.component';
import {NG2DataTableModule} from "angular2-datatable-pagination";
import {NgxPaginationModule} from "ngx-pagination";
import {ModalModule} from "ng2-modal";
// Components Routing
import { ServicePartnerRoutingModule } from './servicePartner-routing.module';
import { EditSalonComponent } from './editsalon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServicePartnerRoutingModule,
    NG2DataTableModule,
    NgxPaginationModule,
    ModalModule,
    ReactiveFormsModule
  ],
  declarations: [
    SalonComponent,
    SalonListComponent,
    EditSalonComponent

  ]
})
export class ServicePartnerModule { }
