import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomersListComponent} from "./components/customers-list/customers-list.component";
import {AddCustomerComponent} from "./components/add-customer/add-customer.component";

const routes: Routes = [
  { path: '', redirectTo:'welcome', pathMatch:'full'},
  { path: 'customers', component:CustomersListComponent},
  { path: 'add', component:AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
