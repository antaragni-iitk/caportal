import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PropertiesComponent } from './properties/properties.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    JumbotronComponent,
    PropertiesComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
