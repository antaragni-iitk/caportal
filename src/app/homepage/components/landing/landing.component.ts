import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from '../../../services/ui.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('contact') el: ElementRef;

  constructor(public ui: UiService) {
  }

  ngOnInit() {

  }


}
