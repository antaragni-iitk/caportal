import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {UiService} from '../../../services/ui.service';
import {ContentService} from '../../../services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('about') about;

  contents;
  constructor(private ui: UiService, private ares: ContentService) {}

  ngOnInit() {
    this.ares.getArray('ca_about').subscribe((content) => {
      this.contents = content['data'];
    });
    this.ui.goAbout.subscribe(() => this.about.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end'}));
  }
}
