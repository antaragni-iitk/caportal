import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ContentService} from '@services/content.service';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counters$ = [
    new BehaviorSubject(0),
    new BehaviorSubject(0),
    new BehaviorSubject(0),
  ];
  titles;

  constructor(private ares: ContentService) {
  }

  counter(limit: number, point: BehaviorSubject<number>, time: number) {
    let counter = 0;
    let counting = setInterval(() => {
      counter++;
      if (counter >= limit) {
        clearInterval(counting);
      }
      point.next(counter);
    }, time);
  }

  ngOnInit() {
    let source = this.ares.getArray('ca_counter');
    this.titles = source.pipe(
      map((val) => val.data.map(prop => prop.title))
    );
    source.subscribe((res) => {
      let data = res.data;
      for (let i in res.data) {
        console.log(i);
        this.counter(data[i].limit, this.counters$[i], data[i].time / data[i].limit);
      }
    });
  }

}
