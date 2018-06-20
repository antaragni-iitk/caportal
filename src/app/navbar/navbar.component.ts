import {Component, OnInit} from '@angular/core';
import {Link} from '../dashboard/models/link';
import {UiService} from '../services/ui.service';
import {FbloginService} from '../services/fblogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  mobile = window.screen.width < 1023;
  shownavmenu = !this.mobile;


  links: Link[] = [
    {name: 'Home', id: 'home'},
    {name: 'Leaderboard', id: 'leaderboard'},
    {name: 'Ideas', id: 'ideas'},
  ];

  selectedLink: string = this.links[0].name;

  constructor(private ui: UiService, private fblogin: FbloginService) {
  }

  toggleit() {
    this.ui.sidenav.next(true);
  }

  logout() {
    this.fblogin.signOut();
  }

  ngOnInit() {

  }
}
