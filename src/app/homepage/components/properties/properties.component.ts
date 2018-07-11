import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UiService} from '@services/ui.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  @ViewChild('services') services;
  scrolltoview = new BehaviorSubject(false);
  data = [[
    {
      icon: 'fas fa-user-tie',
      title: 'Be a leader',
      desc: 'Represent your college as you help organize one of Asia\'s largest cultural fests'
    },
    {
      icon: 'far fa-address-book',
      title: 'Networking',
      desc: 'Get opportunities to interact with celebrities from various fields'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Enhance your skills',
      desc: 'Improve your communication and managerial abilities'
    },
    {
      icon: 'fas fa-home',
      title: 'Accomodation',
      desc: 'Free accomodation for the top performing campus ambassadors @ Antaragni 2018'
    }],
    [{
      icon: 'fas fa-trophy',
      title: 'Certification',
      desc: 'Get a ratified certificate from Antaragni, IIT Kanpur recognizing your efforts'
    },
    {
      icon: 'fas fa-gift',
      title: 'Goodies & Merchandise',
      desc: 'Free Antaragni merchandise and prizes for top performers'
    },
      {
        icon: 'fas fa-home',
        title: 'Accomodation',
        desc: 'Free accomodation for the top performing campus ambassadors @ Antaragni 2018'
      },
      {
        icon: 'fas fa-cogs',
        title: 'Enhance your skills',
        desc: 'Improve your communication and managerial abilities'
      }],

  ];

  @ViewChild('why') why: ElementRef;

  constructor(private ui: UiService) {
  }

  ngOnInit() {
    this.ui.goWhy.subscribe(() => this.why.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}));
  }
}
