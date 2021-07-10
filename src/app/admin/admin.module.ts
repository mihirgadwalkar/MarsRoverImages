import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
//import { ViewcamerasComponent } from './viewcameras/viewcameras.component';
import { ViewroverComponent } from './viewrover/viewrover.component';
import { AddroverComponent } from './addrover/addrover.component';
//import { ViewroverdetailsComponent } from './viewroverdetails/viewroverdetails.component';
import { FormsModule } from '@angular/forms';
import { GetcameraComponent } from './getcamera/getcamera.component';
import { Router, RouterModule } from '@angular/router';
import { GetpicComponent } from './getpic/getpic.component';
import { ViewpicComponent } from './viewpic/viewpic.component';
import { AddpicComponent } from './addpic/addpic.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AdminComponent,
    //ViewcamerasComponent,
    ViewroverComponent,
    AddroverComponent,
    GetcameraComponent,
    GetpicComponent,
    ViewpicComponent,
    AddpicComponent,
    //ViewroverdetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
