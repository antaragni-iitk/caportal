import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FbloginService} from '../../../services/fblogin.service';
import {UiService} from '@services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loaded = new BehaviorSubject(false);
  @ViewChild('top') top: ElementRef;
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

  onhit() {
    this.loginService.signin();
  }

  gonow(cases: string) {
    switch (cases) {
      case 'about':
        this.ui.goAbout.next(true);
        break;
      case 'team':
        this.ui.goTeam.next(true);
        break;
      case 'why':
        this.ui.goWhy.next(true);
        break;
      case 'faq':
        this.ui.goFaq.next(true);
        break;
    }
  }

  ngOnInit() {
    setTimeout(() => this.loaded.next(true), 1000);
    this.ui.goTop.subscribe(() => this.top.nativeElement.scrollIntoView({behavior: 'smooth'}));
  }
}
