import { UiService } from '@services/ui.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input('state') state;

  constructor(public ui: UiService) { }

  ngOnInit() {
    if(this.ui.mobile) this.state = 'about'
  }

}
