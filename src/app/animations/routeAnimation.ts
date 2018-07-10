import { trigger, state, animate, transition, style, keyframes, query, group } from '@angular/animations';

export const routeTransition =
trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter', style({ position: 'fixed', width: '100%' })),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate(500, keyframes([
            style({opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0}),
            style({opacity: 0.4, transform: 'translate3d(20px, 0, 0)', offset: 0.6}),
            style({opacity: 1, transform: 'translate3d(0px, 0, 0)', offset: 1}),
          ]))
        ], {optional: true}),

      ])
    ])
  ]);
