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
import { CamerasComponent } from './cameras/cameras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactusComponent,
    HomeComponent,
    AboutComponent,
    PhotosComponent,
    RoversComponent,
    CamerasComponent,
    SearchfilterPipe,
    PagenotfoundComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
