import { state } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { UiService } from '../../../services/ui.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  visible$ = new BehaviorSubject(true);
  countTrack = 0;
  busy = false
  state
  height = {
    "about": "35vh",
    "why": "50vh",
    "incentives": "50vh",
    "contact": "60vh",
    "responsibilities": "60vh",
    "faq": "65vh",
  }

  constructor(public ui: UiService) {
  }

  ngOnInit() {
    this.state = this.ui.url[this.countTrack]
  }

  next() {
    if (!this.busy && this.countTrack < this.ui.url.length - 1) {
      this.busy = true
      this.countTrack++;
      this.state = this.ui.url[this.countTrack]
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
  links = [
    { description: 'ABOUT', id: 'about' },
    { description: 'WHY?', id: 'why' },
    { description: 'RESPONSIBILITIES', id: 'responsibilities' },
    { description: 'CONTACT US', id: 'contacts' },
    { description: 'FAQs', id: 'faq' },
  ];

  public clicked=false;

  menu(){
    if(this.clicked==true)this.clicked=false;
    else this.clicked=true;
  }

  scroll(id){
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: 'smooth'});
    this.clicked=false;
  }
  
  public hgt: Number;
  hgt=0;
}
