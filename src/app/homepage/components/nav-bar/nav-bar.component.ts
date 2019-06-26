import { FbloginService } from '@services/fblogin.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from '@services/ui.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input('countTrack') countTrack;
  @Output() nav = new EventEmitter<number>()
  links = [
    { description: 'ABOUT?', id: 'about' },
    { description: 'WHY?', id: 'why' },
    { description: 'INCENTIVES', id: 'incentives' },
    { description: 'RESPONSIBILITIES', id: 'responsibilities' },
    { description: 'FAQs', id: 'faq' },
    { description: 'CONTACT US', id: 'contacts' }
  ];

  bgs = [
    '/assets/images/about.jpg',
    '/assets/images/why.jpg',
    '/assets/images/about.jpg',
    '/assets/images/about.jpg',
    '/assets/images/faq.jpg',
    '/assets/images/contact.jpg'
  ]

  constructor(private loginService: FbloginService, private ui: UiService) {
  }

  onhit() {
    this.loginService.signin();
  }

  navTo(i) {
    this.nav.emit(i)
  }

  // gonow(cases: string) {
  //   switch (cases) {
  //     case 'about':
  //       this.ui.goAbout.next(true);
  //       break;
  //     case 'team':
  //       this.ui.goTeam.next(true);
  //       break;
  //     case 'why':
  //       this.ui.goWhy.next(true);
  //       break;
  //     case 'faq':
  //       this.ui.goFaq.next(true);
  //       break;
  //   }
  // }

  ngOnInit() {
    // setTimeout(() => this.loaded.next(true), 1000);
    // this.ui.goTop.subscribe(() => this.top.nativeElement.scrollIntoView({behavior: 'smooth'}));
  }

}
