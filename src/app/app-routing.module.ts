import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { PhotosComponent } from './photos/photos.component'
import { ContactusComponent } from './contactus/contactus.component'
import { RoversComponent } from './rovers/rovers.component';
import { CamerasComponent } from './cameras/cameras.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:'home',component:HomeComponent },
  { path:'about',component:AboutComponent},
  { path:'rovers',component:RoversComponent},
  { path:'cameras/:id',component:CamerasComponent},
  { path:'photos/:id',component:PhotosComponent},
  { path:'contactus',component:ContactusComponent},
  { path:'', redirectTo:'/about',pathMatch:'full'},
  { path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
