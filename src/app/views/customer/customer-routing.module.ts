import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customerList.component';
import { CustomerProfileComponent } from './customerProfile.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'customer'
    },
    children: [
      {
        path: 'customerList',
        component: CustomerListComponent,
        data: {
          title: 'customerList'
        }
      },
      {
        path: 'customerProfile',
        component: CustomerProfileComponent,
        data: {
          title: 'customerProfile'
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
