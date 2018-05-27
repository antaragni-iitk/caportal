import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from '@services/ui.service';
import {ContentService} from '../../../services/content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('services')
  public services;
  text;

  @ViewChild('contact') contact: ElementRef;
  team;

  constructor(private ui: UiService, private ares: ContentService) {
  }

  ngOnInit() {
    this.ares.getArray('ca_team').subscribe((content) => {
      this.team = content['data'];
    });
    this.text = this.ares.getArray('ca_team_text');
    this.ui.goTeam.subscribe(() => this.contact.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}));
  }
}
