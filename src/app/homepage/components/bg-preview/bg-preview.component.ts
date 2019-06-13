import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bg-preview',
  templateUrl: './bg-preview.component.html',
  styleUrls: ['./bg-preview.component.css']
})
export class BgPreviewComponent implements OnInit {
  @Input('countTrack') countTrack;
  bgs = [
    'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://images.unsplash.com/photo-1486989813814-da4a10a6fc7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
    'https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrV3R2Y8MhkZhOGjK32G1BrYwWvVy-NGkaExQhIV48izt0egDT'
  ]

  constructor() {

  }

  ngOnInit() {
  }

}
