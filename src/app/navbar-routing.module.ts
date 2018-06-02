import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { IdeasComponent } from './ideas/ideas.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent, children: [
  		{ path:'leaderboard', component: LeaderboardComponent },
  		{ path:'ideas', component: IdeasComponent },
  		{ path:'home', component: HomeComponent },
  	]
  },
  {path: 'landing', component: LandingComponent},
  {path: '', redirectTo: 'landing', pathMatch: 'full'}
]

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class NavbarRoutingModule { }
