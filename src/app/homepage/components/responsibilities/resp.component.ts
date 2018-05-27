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
