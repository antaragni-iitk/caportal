import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {UiService} from '../../../services/ui.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('contact') el: ElementRef;
  visible$ = new BehaviorSubject(true);

  constructor(public ui: UiService) {
  }

  ngOnInit() {

  }

  next(ev) {
    console.log('called next');
  }

  previous(ev) {
    console.log('called previous');
  }

}
