import {trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const flip =
trigger('flip', [
  state('*', style({opacity: 1, transform: 'translate(0,0)'})),
  transition(':enter', [
    animate(500, keyframes([
      style({opacity: 0, transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -30deg)', offset: 0.0}),
      style({opacity: 0.3, transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95)', offset: 0.5}),
      style({opacity: 1, transform: 'perspective(400px)', offset: 1.0})
    ]))
  ]),
]);
