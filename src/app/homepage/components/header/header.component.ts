import { Component, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FbloginService } from '../../../services/fblogin.service';
import { UiService } from '@services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('state') state;
  @Output() next = new EventEmitter()
  links = [
    {
      id: 'why',
      title: 'Why ?',
      Desc: 'Incentives'
    },
    {
      id: 'about',
      title: 'About Us',
      Desc: 'Who we are'
    },
    {
      id: 'team',
      title: 'The Team',
      Desc: 'Contact us'
    },
    {
      id: 'faq',
      title: 'FAQ',
      Desc: 'Doubts?'
    },
  ];

  constructor(private loginService: FbloginService, private ui: UiService) {
  }

  callNext() {
    this.next.emit()
  }

  onhit() {
    this.loginService.signin();
  }

  ngOnInit() {
  }
}
