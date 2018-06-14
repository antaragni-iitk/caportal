import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatTooltipModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatSnackBarModule, MatDividerModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app-component/app.component';
import { BannerComponent } from './homepage/components/banner/banner.component';
import { PropertiesComponent } from './homepage/components/properties/properties.component';
import { HeaderComponent } from './homepage/components/header/header.component';
import { ContactComponent } from './homepage/components/contact/contact.component';
import { RespComponent } from './homepage/components/resp/resp.component';
import { AboutComponent } from './homepage/components/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { LeaderboardComponent } from './dashboard/components/leaderboard/leaderboard.component';
import { IdeasComponent } from './dashboard/components/ideas/ideas.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './homepage/components/landing/landing.component';
import { UiService } from './services/ui.service';
import { RegisterComponent } from './homepage/components/register/register.component';
import { FormsModule } from '@angular/forms';
import { TncComponent } from './homepage/components/register/tnc/tnc.component';
import { FollowPortalsComponent } from './homepage/components/register/follow-portals/follow-portals.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {Funcs} from './utility/function';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AnalyticsDirective} from './directives/analytics.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PropertiesComponent,
    HeaderComponent,
    ContactComponent,
    RespComponent,
    AboutComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LeaderboardComponent,
    IdeasComponent,
    LandingComponent,
    RegisterComponent,
    TncComponent,
    AnalyticsDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // material
    MatSidenavModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDividerModule,
    MatTabsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [UiService, Funcs],
  bootstrap: [AppComponent]
})
export class AppModule {
}
