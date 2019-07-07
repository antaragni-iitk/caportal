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
    { description: 'ABOUT', id: 'about' },
    { description: 'WHY?', id: 'why' },
    { description: 'INCENTIVES', id: 'incentives' },
    { description: 'RESPONSIBILITIES', id: 'responsibilities' },
    { description: 'FAQs', id: 'faq' },
    { description: 'CONTACT US', id: 'contacts' },
    { description: 'SPONSORS', id: 'sponsors'}
  ];

  bgs = [
    'https://drive.google.com/uc?export=view&id=1H4YC3e4w_gaSj5Zvit28fIstGwVu06ow',
    'https://drive.google.com/uc?export=view&id=1Z-3K0qRb-LC1m_x0kZ62Qh3w63e-kG7M',
    'https://drive.google.com/uc?export=view&id=1qQVSAVmb2jSNEZWZHx_GUQSsucOZUaq1',
    'https://drive.google.com/uc?export=view&id=1gr3_S5DVSApvgtgPf8cVETWlNYZprTp4',
    'https://drive.google.com/uc?export=view&id=15Lferh78no6oRosa5aq8lyC9482uMRf-',
    'https://drive.google.com/uc?export=view&id=1sLfErFsBnZZWQjf4V0PCsTx-DUuNBEvT'
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
