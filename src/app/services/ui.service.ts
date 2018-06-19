import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  sidenav = new BehaviorSubject<boolean>(true);
  scrollPos = new BehaviorSubject<number>(0);
  constructor() { }
}
