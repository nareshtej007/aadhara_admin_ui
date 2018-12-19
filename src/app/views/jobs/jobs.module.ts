// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { JobsComponent } from './jobs.component';




// Components Routing
import { JobsRoutingModule } from './jobs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JobsRoutingModule
    
  ],
  declarations: [
    JobsComponent

  ]
})
export class JobsModule { }
