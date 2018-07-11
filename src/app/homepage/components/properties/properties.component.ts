import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ContentService} from '../../../services/content.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  @ViewChild('services') 
  public services;
  scrolltoview = new BehaviorSubject(false);

  constructor(private ares: ContentService) {}

  private data;

  //   {
  //     icon: 'fas fa-user-tie',
  //     title: 'Be a leader',
  //     desc: 'Represent your college as you help organize one of Asia\'s largest cultural fests'
  //   },
  //   {
  //     icon: 'far fa-address-book',
  //     title: 'Networking',
  //     desc: 'Get opportunities to interact with celebrities from various fields'
  //   },
  //   {
  //     icon: 'fas fa-cogs',
  //     title: 'Enhance your skills',
  //     desc: 'Improve your communication and managerial abilities'
  //   },
  //   {
  //     icon: 'fas fa-trophy',
  //     title: 'Certification',
  //     desc: 'Get a ratified certificate from Antaragni, IIT Kanpur recognizing your efforts'
  //   },
  //   {
  //     icon: 'fas fa-gift',
  //     title: 'Goodies & Merchandise',
  //     desc: 'Free Antaragni merchandise and prizes for top performers'
  //   },
  //   {
  //     icon: 'fas fa-home',
  //     title: 'Accomodation',
  //     desc: 'Free accomodation for the top performing campus ambassadors @ Antaragni 2018'
  //   },

  // ];


  ngOnInit() {
    this.ares.getArray('ca_why').subscribe((content) => {
      this.data = content['data'];
    });
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll($event: Event): void {
    if (window.scrollY + window.screen.height - 200 > this.services.nativeElement.offsetTop) {
      this.scrolltoview.next(true);
    }
  }
}
