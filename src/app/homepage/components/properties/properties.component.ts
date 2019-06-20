import {Component, ElementRef, OnInit, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ContentService} from '../../../services/content.service';
import {UiService} from '@services/ui.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  @Input('state') state;
  data;
  len: number;

  constructor(private ui: UiService, private ares: ContentService) {
  }

  ngOnInit() {
    this.ares.getArray('ca_why').subscribe((content) => {
      this.data = content['data'];
      this.len = this.data.length;
    });
  }
}
