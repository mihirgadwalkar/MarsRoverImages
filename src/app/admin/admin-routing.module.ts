import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewroverComponent } from './viewrover/viewrover.component';
import { AddroverComponent } from './addrover/addrover.component';
import { GetcameraComponent } from './getcamera/getcamera.component';
import { GetpicComponent } from './getpic/getpic.component';
import { ViewpicComponent } from './viewpic/viewpic.component';
import { AddpicComponent } from './addpic/addpic.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[
  {path:'getcam',component:GetcameraComponent,
     children:[
             {path:'viewcameras',component:ViewroverComponent},
             {path:'addcamera',component:AddroverComponent},
             {path:'',redirectTo:"viewcameras",pathMatch:"full"}
              ]
            },
  {path:'getpic',component:GetpicComponent,
     children:[
             {path:'viewpics',component:ViewpicComponent},
             {path:'addpic',component:AddpicComponent},
             {path:'',redirectTo:'viewpics',pathMatch:"full"}
     ]}
]}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
