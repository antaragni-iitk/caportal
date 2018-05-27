import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ContentService} from '../../../services/content.service';
import {UiService} from '@services/ui.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  @ViewChild('services')
  public services;
  scrolltoview = new BehaviorSubject(false);
  @ViewChild('why') why: ElementRef;
  data;
  len: number;

  constructor(private ui: UiService, private ares: ContentService) {
  }

  ngOnInit() {
    this.ares.getArray('ca_why').subscribe((content) => {
      this.data = content['data'];
      this.len = this.data.length;
    });
    this.ui.goWhy.subscribe(() => this.why.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}));
  }
}
