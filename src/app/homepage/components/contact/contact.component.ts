import { Component, ElementRef, OnInit, Input } from '@angular/core';
import {UiService} from '@services/ui.service';
import {ContentService} from '../../../services/content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input('state') state;

  public services;
  // text;

  team;

  constructor(private ui: UiService, private ares: ContentService) {
  }

  ngOnInit() {
    if(this.ui.mobile) this.state = 'contact'
    this.ares.getArray('ca_team').subscribe((content) => {
      this.team = content['data'];
    });
    // this.text = this.ares.getArray('ca_team_text');
  }
}
