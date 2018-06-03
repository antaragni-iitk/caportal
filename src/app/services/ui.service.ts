import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  sidenav = new BehaviorSubject<boolean>(true);
  constructor() { }
}
