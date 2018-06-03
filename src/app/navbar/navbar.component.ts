import {Component, OnInit} from '@angular/core';
import {Link} from '../dashboard/models/link';
import {UiService} from '../services/ui.service';

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
    {name: 'Logout', id: '/'}
  ];

  selectedLink: Link;

  constructor(private ui: UiService) {
  }

  toggleit() {
    this.ui.sidenav.next(true);
  }

  ngOnInit() {

  }

  onSelect(link: Link): void {
    this.selectedLink = link;
  }

}
