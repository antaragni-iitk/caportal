import {trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const bounceOutLeft =
trigger('bounceOutLeft', [
  transition('* => *', [
    animate(500, keyframes([
      style({opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0}),
      style({opacity: 0.4, transform: 'translate3d(20px, 0, 0)', offset: 0.6}),
      style({opacity: 1, transform: 'translate3d(0px, 0, 0)', offset: 1}),
    ]))
  ])
]);
