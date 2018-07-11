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

  scrollup() {
    this.ui.goTop.next(true);
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll($event: Event): void {
    if (window.scrollY > window.screen.height) {
      this.visible$.next(false);
    } else {
      this.visible$.next(true);
    }
  }


}
