import { UiService } from '@services/ui.service';
import {Component, OnInit, Input} from '@angular/core';
import {ContentService} from '../../../services/content.service';
import { state } from '@angular/animations';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resp',
  templateUrl: './resp.component.html',
  styleUrls: ['./resp.component.css']
})
export class RespComponent implements OnInit {
  @Input('state') state;
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

  constructor(private ares: ContentService, public ui: UiService) {
  }

  ngOnInit() {
    if(this.ui.mobile) this.state = 'responsibilities';
    this.contents = this.ares.getArray('ca_responsibilities').pipe(map(res => res['data']))
  }

  hovered() {
    console.log(this.hov);
    this.hov = !this.hov;
  }

}
