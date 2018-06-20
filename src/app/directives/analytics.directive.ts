import {Directive, HostListener, Input} from '@angular/core';


@Directive({
  selector: '[appEventTracker]'
})
export class AnalyticsDirective {

  @Input('eventTracker') eventTracker: any;

  constructor() {
  }

  @HostListener('click', ['$event']) onClick($event) {

    (<any>window).ga('send', 'event', this.eventTracker.category, this.eventTracker.action, {
      hitCallback: function () {

        console.log('Tracking is successful');

      }

    });

  }

}
