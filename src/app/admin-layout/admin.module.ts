import { SidenavComponent } from './../shared/layout/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from '../home/home.component';
import { LeadsComponent } from '../leads/leads.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PotentialsComponent } from '../potentials/potentials.component';
import { CustomersComponent } from '../customers/customers.component';
import { SalesClosedComponent } from '../sales-closed/sales-closed.component';
import { CallMeetingComponent } from '../call-meeting/call-meeting.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    HomeComponent,
    LeadsComponent,
    PotentialsComponent,
    CustomersComponent,
    SalesClosedComponent,
    CallMeetingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
