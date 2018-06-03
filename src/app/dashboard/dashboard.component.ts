import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
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
  constructor(private ui: UiService) { }

  ngOnInit() {
    this.ui.sidenav.subscribe(() => this.drawer.toggle());
  }

}
