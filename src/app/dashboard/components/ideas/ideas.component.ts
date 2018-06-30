import { bounceOutLeft } from 'app/animations/bounceOutLeft';
import {Component, OnInit} from '@angular/core';

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
