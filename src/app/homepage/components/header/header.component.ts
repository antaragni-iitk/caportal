import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FbloginService} from '../../../services/fblogin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loaded = new BehaviorSubject(false);

  constructor(private loginService: FbloginService) {}
  onhit() {
    this.loginService.signin();
  }

  ngOnInit() {
    setTimeout(() => this.loaded.next(true), 1000);
  }
}
