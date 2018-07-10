import {trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    state('*', style({opacity: 1, height: '*'})),
    transition(':enter', [
      style({opacity: 0, height: 0}),
      animate('1s ease-out', style({opacity: 1, height: '*'}))
    ])
  ]);
