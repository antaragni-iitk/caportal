import { flip } from './../../../animations/flip';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ flip ]
})
export class HomeComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }

}
