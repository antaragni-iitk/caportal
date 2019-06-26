import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bg-preview',
  templateUrl: './bg-preview.component.html',
  styleUrls: ['./bg-preview.component.css']
})
export class BgPreviewComponent implements OnInit {
  @Input('countTrack') countTrack;
  bgs = [
    '/assets/images/about.jpg',
    '/assets/images/why.jpg',
    '/assets/images/about.jpg',
    '/assets/images/about.jpg',
    '/assets/images/faq.jpg',
    '/assets/images/contact.jpg'
  ]

  constructor() {

  }

  ngOnInit() {
  }

}
