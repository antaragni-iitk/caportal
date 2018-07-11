import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from '@services/ui.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @ViewChild('faq') faq: ElementRef;

  constructor(private ui: UiService) {
  }

  ngOnInit() {
    this.ui.goFaq.subscribe(() => this.faq.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end'}));
  }
}
