import {Component, ElementRef, OnInit, Input} from '@angular/core';
import {UiService} from '@services/ui.service';
import {ContentService} from '@services/content.service';
import {map, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @Input('state') state
  data;
  len: number;

  constructor(private ui: UiService, private ares: ContentService) {
  }

  ngOnInit() {
    if(this.ui.mobile) this.state = 'faq'
    this.data = this.ares.getArray('ca_faq').pipe(
      tap((val: {data: any}) => this.len = val.data.length),
      map((res) => Object.keys(res.data).map(val => res.data[val]))
    )
    ;
  }
}
