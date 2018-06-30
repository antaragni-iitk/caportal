import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FbloginService} from '../../../services/fblogin.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(private loginService: FbloginService) {
  }

  ngOnInit() {

  }

  onhit() {
    this.loginService.signin();
  }
}
