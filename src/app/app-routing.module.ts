import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { PhotosComponent } from './photos/photos.component'
import { ContactusComponent } from './contactus/contactus.component'
import { RoversComponent } from './rovers/rovers.component';
import { PhotosdetailsComponent } from './photosdetails/photosdetails.component';
import { RoverdetailsComponent } from './roverdetails/roverdetails.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'photos',component:PhotosComponent},
  { path:'photos/:id',component:PhotosdetailsComponent},
  { path:'contactus',component:ContactusComponent},
  { path:'rovers',component:RoversComponent},
  { path:'rovers/:id',component:RoverdetailsComponent},
  { path:'', redirectTo:'/photos',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
