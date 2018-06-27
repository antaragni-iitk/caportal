import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  sidenav = new BehaviorSubject<boolean>(true);
  scrollPos = new BehaviorSubject<boolean>(false);

  constructor() {
  }
}
