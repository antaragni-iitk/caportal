import {Component, OnInit} from '@angular/core';
import {FbloginService} from '../../../services/fblogin.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  shownavmenu = false;

  constructor(private loginService: FbloginService) {
  }

  ngOnInit() {

  }

  onhit() {
    this.loginService.signin();
  }


}
