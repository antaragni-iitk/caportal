import {Component, OnInit} from '@angular/core';
import {FbloginService} from '../../../services/fblogin.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  data = [
    {
      title: 'share posts',
      desc: 'Share posts relating Antaragni and earn points. We won\'t share posts in your behalf.'
    },
    {
      title: 'leaderboard',
      desc: 'Know your position and who you are competing with. Become a Brand Ambassador.'
    },
    {
      title: 'Ideas',
      desc: 'Feel free to reach us and share your innovative ideas with. We are hearing!'
    }
  ];

  constructor(private loginService: FbloginService) {
  }

  ngOnInit() {

  }

  onhit() {
    this.loginService.signin();
  }
}
