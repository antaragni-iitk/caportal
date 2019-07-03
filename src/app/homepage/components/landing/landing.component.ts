import { FbloginService } from '@services/fblogin.service';
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
  @ViewChild('top', { static: false }) element: ElementRef;
  visible$ = new BehaviorSubject(true);
  countTrack = 0;
  busy = false
  state
  height = {
    "about": "35vh",
    "why": "50vh",
    "incentives": "50vh",
    "contact": "65vh",
    "responsibilities": "60vh",
    "faq": "65vh",
  }
  links = [
    { description: 'ABOUT', id: 'about' },
    { description: 'WHY?', id: 'why' },
    { description: 'RESPONSIBILITIES', id: 'responsibilities' },
    { description: 'CONTACT US', id: 'contacts' },
    { description: 'FAQs', id: 'faq' },
  ];

  constructor(public ui: UiService, public loginService: FbloginService) {
  }

  ngOnInit() {
    this.state = this.ui.url[this.countTrack]
  }

  next() {
    if (!this.busy && this.countTrack < this.ui.url.length) {
      this.busy = true
      this.countTrack++;
      if (this.countTrack != this.ui.url.length) this.state = this.ui.url[this.countTrack]
      setTimeout(() => { this.busy = false }, 1000)
    }
  }

  previous() {
    if (!this.busy && this.countTrack > 0) {
      this.busy = true
      this.countTrack--;
      this.state = this.ui.url[this.countTrack]
      setTimeout(() => { this.busy = false }, 1000)
    }
  }

  nav(ev) {
    if (ev == this.countTrack) return
    this.countTrack += ev - this.countTrack;
    this.state = this.ui.url[this.countTrack]
  }

  public clicked = false;

  menu() {
    if (this.clicked == true) this.clicked = false;
    else this.clicked = true;
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
    this.clicked = false;
  }

  scrollup() {
    this.element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onhit() {
    this.loginService.signin();
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
