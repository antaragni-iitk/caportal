import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  export class Link {
	name: string;
	id: string;
  }

  selectedLink: Link;
	
  const links: Link[]=[
  	{ name:'Ideas', id:'ideas' },
  	{ name:'Leaderboard', id:'leaderboard' },
  	{ name:'Home', id:'home' }
  ];

  constructor() { ;}


  ngOnInit() {;
  }

  onSelect(link: Link): void {
  	this.selectedLink = link;
  }

}
