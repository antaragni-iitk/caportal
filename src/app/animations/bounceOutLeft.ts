import {trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const bounceOutLeft =
trigger('bounceOutLeft', [
  transition(':leave', [
    animate(1500, keyframes([
      style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2}),
      style({opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 1})
    ]))
  ])
]);
