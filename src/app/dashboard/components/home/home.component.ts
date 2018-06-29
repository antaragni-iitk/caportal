import {Component, OnInit} from '@angular/core';
import {bounceOutLeft} from 'app/animations/bounceOutLeft';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [bounceOutLeft]
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
