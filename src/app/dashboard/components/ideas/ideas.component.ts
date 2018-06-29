import {Component, OnInit} from '@angular/core';
import {bounceOutLeft} from 'app/animations/bounceOutLeft';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  animations: [ bounceOutLeft ]
})
export class IdeasComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
