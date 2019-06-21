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

  constructor(public ui: UiService, private ares: ContentService) {
  }

  ngOnInit() {
    if(this.ui.mobile) this.state = 'why';
    
    this.ares.getArray('ca_why').subscribe((content) => {
      this.data = content['data'];
      this.len = this.data.length;
    });
  }
}
