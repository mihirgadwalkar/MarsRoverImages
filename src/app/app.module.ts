import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { RoversComponent } from './rovers/rovers.component';
import { RoverdetailsComponent } from './roverdetails/roverdetails.component';
import { PhotosdetailsComponent } from './photosdetails/photosdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactusComponent,
    HomeComponent,
    AboutComponent,
    PhotosComponent,
    RoversComponent,
    RoverdetailsComponent,
    PhotosdetailsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
