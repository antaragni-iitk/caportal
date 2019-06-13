import { Component, OnInit, Input } from '@angular/core';
import { state } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input('state') state;

  constructor() { }

  ngOnInit() {
  }

}
