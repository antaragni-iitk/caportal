import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';

const routes: Routes = [
  { path:'leaderboard', component: LeaderboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'ideas', component: IdeasComponent },
  { path:'home', component: HomeComponent }
]

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class NavbarRoutingModule { }
