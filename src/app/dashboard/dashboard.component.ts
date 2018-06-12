import {Component, OnInit, ViewChild} from '@angular/core';
import {UiService} from '../services/ui.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  state;
  @ViewChild('drawer') drawer;
  showFiller = false;
  points = {
    'Total Points': 32,
    'Idea Points': 31,
    'Other Points': 89,
  };
  pointkeys = Object.keys(this.points);

  constructor(private ui: UiService) {
  }

  ngOnInit() {
    this.ui.sidenav.subscribe(() => this.drawer.toggle());
  }
}
