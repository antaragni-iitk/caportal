import {trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const vagueFlyIn =
trigger('vagueFlyIn', [
  state('*', style({opacity: 1, transform: 'translate(0,0)'})),
  transition('* => *', [
    animate(500, keyframes([
      style({opacity: 0, transform: 'translate(0,100vh)', offset: 0.5}),
      style({opacity: 0, transform: 'translate(100vw,100vh)', offset: 0.7}),
      style({opacity: 0, transform: 'translate(100vw,0)', offset: 0.8}),
      style({opacity: 1, transform: 'translate(0,0)', offset: 1.0})
    ]))
  ])
]);
