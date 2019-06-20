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
    'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://images.unsplash.com/photo-1486989813814-da4a10a6fc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrV3R2Y8MhkZhOGjK32G1BrYwWvVy-NGkaExQhIV48izt0egDT'
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
