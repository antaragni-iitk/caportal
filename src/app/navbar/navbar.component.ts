import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  
	
  links: Link[]= [
  	{ name:'Ideas', id:'ideas' },
  	{ name:'Leaderboard', id:'leaderboard' },
  	{ name:'Home', id:'home' }
  ];

  selectedLink: Link;
  constructor() {}


  ngOnInit() {

  }

  onSelect(link: Link): void {
  	this.selectedLink = link;
  }

}
