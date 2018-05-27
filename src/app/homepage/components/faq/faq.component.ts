import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from '@services/ui.service';
import {ContentService} from '@services/content.service';
import {map, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @ViewChild('faq') faq: ElementRef;
  data;
  len: number;

  constructor(private ui: UiService, private ares: ContentService) {
  }

  ngOnInit() {
    this.data = this.ares.getArray('ca_faq').pipe(
      tap((val: {data: any}) => this.len = val.data.length),
      map((res) => Object.keys(res.data).map(val => res.data[val]))
    )
    ;
    this.ui.goFaq.subscribe(() => this.faq.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center'}));
  }
}
