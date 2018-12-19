import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalonComponent } from './salon.component';
import { SalonListComponent } from './salonList.component';
import { EditSalonComponent } from './editsalon.component';

const routes: Routes = [
  {
    path: '',
    //pathMatch: 'prefix',
    data: {
      title: 'ServicePartner'
    },
    children: [
      {
        path: 'salon',
        component: SalonComponent,
        data: {
          title: 'salon'
        }
      },
      {
        path: 'salonList',
        component: SalonListComponent,
        data: {
          title: 'salonList'
        }
      },
      {
        path: 'editsalon',
        component: EditSalonComponent,
        data: {
          title: 'editsalon'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePartnerRoutingModule {}
