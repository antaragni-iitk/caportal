import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  sidenav = new BehaviorSubject<boolean>(true);
  scrollPos = new BehaviorSubject<boolean>(false);

  goAbout = new Subject();
  goWhy = new Subject();
  goTeam = new Subject();
  goFaq = new Subject();
  goTop = new Subject();

  constructor() {
  }
}
