import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../../services/content.service';

@Component({
  selector: 'app-resp',
  templateUrl: './resp.component.html',
  styleUrls: ['./resp.component.css']
})
export class RespComponent implements OnInit {
  public hov = false;

  contents;
  // titles = [
  //   'Advertise',
  //   'Organize',
  //   'Conduct'
  // ];

  // desciption = [
  //   `Publicize Antaragni in your college by sharing posts and promoting content by becoming a focal point
  //    for your respective college.`,
  //   `Organize events, workshops and sessions regarding Antaragni and what it has to offer with assistance
  //    from mentors`,
  //   `Help in management of elimination rounds in your college and city to select participants for the main
  //    event`
  // ];

  icons = [
    'fas fa-bullhorn',
    'fas fa-globe',
    'fas fa-user-cog media-object'
  ];
  bcolor = [
    'orange',
    'yellow',
    'pink',
    'blue',
];

  constructor(private ares: ContentService) {
  }

  ngOnInit() {
    this.ares.getArray('ca_responsibilities').subscribe((content) => {
      this.contents = content['data'];
      // console.log(content);
    });
  }

  hovered() {
    console.log(this.hov);
    this.hov = !this.hov;
  }

}
