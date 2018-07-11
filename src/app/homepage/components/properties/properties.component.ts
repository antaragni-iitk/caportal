import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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

  constructor(private ares: ContentService) {}

  private data;
  @ViewChild('why') why: ElementRef;

  constructor(private ui: UiService) {
  }

  ngOnInit() {
    this.ares.getArray('ca_why').subscribe((content) => {
      this.data = content['data'];
     });
    this.ui.goWhy.subscribe(() => this.why.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}));
  }
}
