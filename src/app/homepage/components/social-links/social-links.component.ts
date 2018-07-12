import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {
  img_datas = [
    {path: './assets/images/fb.png', url: 'https://www.facebook.com/antaragni.iitk/'},
    {path: './assets/images/youtube.png', url: 'https://www.youtube.com/user/antaragniiitkanpur/'},
    {path: './assets/images/instagram.png', url: 'https://www.instagram.com/antaragni/'},
    {path: './assets/images/linkedin.png', url: 'https://www.linkedin.com/company/antaragni-iit-kanpur/'},
  ];

  @Input() links: Array<number> = [0, 1, 2, 3];

  constructor() {
  }

  ngOnInit() {
  }

}
