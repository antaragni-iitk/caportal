import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  @ViewChild('services') services;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll($event: Event): void {
    console.log(window.scrollY - this.services.nativeElement.offsetTop);
  }

}
