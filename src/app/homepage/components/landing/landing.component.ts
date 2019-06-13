import { state } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('contact') el: ElementRef;
  visible$ = new BehaviorSubject(true);
  countTrack = 0;
  busy = false
  state

  constructor(public ui: UiService) {
  }

  ngOnInit() {
    this.state = this.ui.url[this.countTrack]
  }

  next() {
    if (!this.busy && this.countTrack < 4) {
      this.busy = true
      this.countTrack++;
      this.state = this.ui.url[this.countTrack]
      setTimeout(() => { this.busy = false }, 1000)
    }
  }

  previous() {
    if (!this.busy || this.countTrack > 0) {
      this.busy = true
      this.countTrack--;
      this.state = this.ui.url[this.countTrack]
      setTimeout(() => { this.busy = false }, 1000)
    }
  }

}
