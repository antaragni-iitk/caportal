import { SocialLinksComponent } from './homepage/components/social-links/social-links.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatComponentsModule } from './mat-components/mat-components.module';

import { AppComponent } from './app-component/app.component';
import { BannerComponent } from './homepage/components/banner/banner.component';
import { PropertiesComponent } from './homepage/components/properties/properties.component';
import { HeaderComponent } from './homepage/components/header/header.component';
import { ContactComponent } from './homepage/components/contact/contact.component';
import { RespComponent } from './homepage/components/responsibilities/resp.component';
import { AboutComponent } from './homepage/components/about/about.component';
import { DashboardComponent, NotificationRequestDialog } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { LeaderboardComponent } from './dashboard/components/leaderboard/leaderboard.component';
import { IdeasComponent } from './dashboard/components/ideas/ideas.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './homepage/components/landing/landing.component';
import { UiService } from './services/ui.service';
import { ContentService } from './services/content.service';
import { RegisterComponent } from './dashboard/components/register/register.component';
import { FormsModule } from '@angular/forms';
import { TncComponent } from './dashboard/components/register/tnc/tnc.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { Funcs } from './utility/function';
import { NgsRevealModule } from 'ng2-scrollreveal';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsDirective } from './directives/analytics.directive';
import { AntaragniFeedService } from './services/feed';
import { AntaragniFeedComponent } from './antaragni-feed';
import { FacebookModule } from 'ngx-facebook';
import { FaqComponent } from './homepage/components/faq/faq.component';
import { CounterComponent } from './homepage/components/counter/counter.component';
import { FooterComponent } from './homepage/components/footer/footer.component';
import { SponsorsComponent } from './homepage/components/sponsors/sponsors.component';
import { DialogMessageComponent } from '@services/fblogin.service';
import { NavbarComponent } from './navbar/navbar.component';
import { WheelTrackerDirective } from './directives/wheel-tracker.directive';
import { NavBarComponent } from './homepage/components/nav-bar/nav-bar.component';
import { BgPreviewComponent } from './homepage/components/bg-preview/bg-preview.component';
import { ServiceWorkerModule } from '@angular/service-worker';


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
    AntaragniFeedComponent,
    FaqComponent,
    CounterComponent,
    FooterComponent,
    SocialLinksComponent,
    SponsorsComponent,
    DialogMessageComponent,
    NavBarComponent,
    WheelTrackerDirective,
    BgPreviewComponent,
    NotificationRequestDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgsRevealModule.forRoot(),
    MatComponentsModule,
    FacebookModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [UiService, Funcs, AntaragniFeedService, ContentService],
  bootstrap: [AppComponent],
  entryComponents: [DialogMessageComponent, NotificationRequestDialog]
})
export class AppModule {
}
