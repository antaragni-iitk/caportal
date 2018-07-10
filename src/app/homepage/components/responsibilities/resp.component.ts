import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resp',
  templateUrl: './resp.component.html',
  styleUrls: ['./resp.component.css']
})
export class RespComponent implements OnInit {

  titles = [
    'Advertise',
    'Organize',
    'Conduct',
    'Conduct',
  ];

  desciption = [
    `Publicize Antaragni in your college by sharing posts and promoting content by becoming a focal point
     for your respective college.`,
    `Organize events, workshops and sessions regarding Antaragni and what it has to offer with assistance
     from mentors`,
    `Help in management of elimination rounds in your college and city to select participants for the main
     event`,
     `Help in management of elimination rounds in your college and city to select participants for the main
     event`,
  ];

  icons = [
    'fas fa-bullhorn',
    'fas fa-globe',
    'fas fa-user-cog media-object',
    'fas fa-user-cog media-object',
  ];
  bcolor= [
    'orange',
     'yellow',
     'pink',
     'blue',
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
