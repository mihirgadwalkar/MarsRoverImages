import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { PhotosComponent } from './photos/photos.component'
import { ContactusComponent } from './contactus/contactus.component'
import { RoversComponent } from './rovers/rovers.component';
import { PhotosdetailsComponent } from './photosdetails/photosdetails.component';
import { RoverdetailsComponent } from './roverdetails/roverdetails.component';
import { CamerasComponent } from './cameras/cameras.component';

const routes: Routes = [
  { path:'home',component:HomeComponent },
  { path:'about',component:AboutComponent},
  { path:'rovers',component:RoversComponent},
  //{ path:'rovers-details/:id',component:RoverdetailsComponent},
  
  { path:'cameras/:id',component:CamerasComponent},
  { path:'photos/:id',component:PhotosComponent},
  { path:'photos-details/:id',component:PhotosdetailsComponent},
  { path:'contactus',component:ContactusComponent},
  { path:'', redirectTo:'/about',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
