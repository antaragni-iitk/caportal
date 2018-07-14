import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from '../services/ui.service';
import {FbloginService} from '../services/fblogin.service';
import {LocalUser} from '../models/localuser';
import {Observable} from 'rxjs';
import {bounceOutLeft} from '../animations/bounceOutLeft';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    bounceOutLeft
  ]
})
export class DashboardComponent implements OnInit {
  state;
  @ViewChild('refcode') ref: ElementRef;
  mobile = window.screen.width < 1023;
  user: Observable<LocalUser>;
  @ViewChild('drawer') drawer;
  showFiller = false;
  points = {
    'Idea Points': 'otherPoints',
    'Likes': 'likes',
    'Shares': 'shares',
    'Other Points': 'ideaPoints',
    'Total Points': 'totalPoints',
  };
  pointkeys = Object.keys(this.points);

  constructor(private ui: UiService, private fbloginservice: FbloginService) {
    this.user = this.fbloginservice.currentUser;
  }

  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRoute.url;
  }

  copyit() {
    this.ref.nativeElement.select();
    document.execCommand('copy');
    this.ref.nativeElement.blur();
  }

  ngOnInit() {
    this.ui.sidenav.subscribe(() => this.drawer.toggle());
  }
}
