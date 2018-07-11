import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UiService} from '@services/ui.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('contact') contact: ElementRef;

  constructor(private ui: UiService) {
  }

  ngOnInit() {
    this.ui.goTeam.subscribe(() => this.contact.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}));
  }
}
