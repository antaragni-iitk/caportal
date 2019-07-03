import { ContentService } from './../../../services/content.service';
import { UiService } from '@services/ui.service';
import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input('state') state;
  about;

  constructor(public ui: UiService, private ares: ContentService) { }

  ngOnInit() {
    if (this.ui.mobile) this.state = 'about'
    this.about = this.ares.getArray('ca_about').pipe(map(res => res['data'][0]['about']['content']))
  }

}
