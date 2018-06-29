import { flip } from './../../../animations/flip';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  animations: [ flip ]
})
export class IdeasComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
