import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {ContentService} from '@services/content.service';
import {map, take} from 'rxjs/internal/operators';

export interface AresCounterData {
  data: Array<{
    title: string
    limit: number
    time: number
  }>;
}

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
  startCount$ = new Subject();
  titles;
  data;

  constructor(private ares: ContentService) {
  }

  counter(limit: number, point: BehaviorSubject<number>, time: number) {
    let counter = 0;
    const counting = setInterval(() => {
      counter++;
      if (counter >= limit) {
        clearInterval(counting);
      }
      point.next(counter);
    }, time);
  }

  ngOnInit() {
    const source = this.ares.getArray('ca_counter');
    this.titles = source.pipe(
      map((val: AresCounterData) => val.data.map(prop => prop.title))
    );
    source.subscribe((res: AresCounterData) => {
      this.data = res.data;
    });
    this.startCount$.pipe(take(1)).subscribe(() => {
        for (const i in this.data) {
          if (this.data.hasOwnProperty(i)) {
            this.counter(this.data[i].limit, this.counters$[i], this.data[i].time / this.data[i].limit);
          }
        }
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll($event: Event): void {
    if (window.scrollY > 100) {
      this.startCount$.next(0);
    }
  }

}
