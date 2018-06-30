import { routeTransition } from './../animations/routeAnimation';
import {Component, OnInit, ViewChild} from '@angular/core';
import {UiService} from '../services/ui.service';
import {FbloginService} from '../services/fblogin.service';
import {LocalUser} from '../models/localuser';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    routeTransition
  ]
})
export class DashboardComponent implements OnInit {
  state;
  user: Observable<LocalUser>;
  @ViewChild('drawer') drawer;
  showFiller = false;
  points = {
    'Total Points': 32,
    'Idea Points': 31,
    'Other Points': 89,
  };
  pointkeys = Object.keys(this.points);

  constructor(private ui: UiService, private fbloginservice: FbloginService) {
    this.user = this.fbloginservice.currentUser;
  }

  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRoute.url;
  }

  ngOnInit() {
    this.ui.sidenav.subscribe(() => this.drawer.toggle());
  }
}
