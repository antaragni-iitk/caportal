import {Directive, HostListener, Input} from '@angular/core';


@Directive({
  selector: '[eventTracker]'
})
export class AnalyticsDirective {

  @Input('eventTracker') option: any;

  constructor() {
  }

  @HostListener('click', ['$event']) onClick($event) {

    (<any>window).ga('send', 'event', this.option.category, this.option.action, {
      hitCallback: function () {

        console.log('Tracking is successful');

      }

    });

  }

}
