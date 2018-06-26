import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LeaderboardComponent} from './dashboard/components/leaderboard/leaderboard.component';
import {HomeComponent} from './dashboard/components/home/home.component';
import {LandingComponent} from './homepage/components/landing/landing.component';
import {IdeasComponent} from './dashboard/components/ideas/ideas.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './homepage/components/register/register.component';
import {TncComponent} from './homepage/components/register/tnc/tnc.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'prefix'},
      {path: 'leaderboard', component: LeaderboardComponent},
      {path: 'ideas', component: IdeasComponent},
      {path: 'home', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'register/tnc', component: TncComponent},
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
