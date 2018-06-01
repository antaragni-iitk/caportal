import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { PropertiesComponent } from './properties/properties.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< fc356775642f87cc567afeef256841681eef89ba
import { RespComponent } from './resp/resp.component';
import { AboutComponent } from './about/about.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> dashboard added

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PropertiesComponent,
    HeaderComponent,
    ContactComponent,
<<<<<<< fc356775642f87cc567afeef256841681eef89ba
    RespComponent,
    AboutComponent
=======
    NavbarComponent,
    DashboardComponent
>>>>>>> dashboard added
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
