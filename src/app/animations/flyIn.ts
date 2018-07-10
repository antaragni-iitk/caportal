import {trigger, state, animate, transition, style, keyframes} from '@angular/animations';
import {Component} from '@angular/core';


export const flyInAnimation =
  trigger('flyInAnimation', [
    state('*', style({opacity: 1, transform: 'translate(0,0)'})),
    transition(':enter', [
      style({height: 0, opacity: 0, transform: 'translate(100vw,0)'}),
      animate('.5s .12s ease-out', style({opacity: 1, transform: 'translate(0,0)', height: '*'}))
    ]),
    transition(':leave', [
      style({opacity: 1, transform: 'translate(0,0)'}),
      animate('.1s ease-in', style({opacity: 0, transform: 'translate(0,100vh)'}))
    ])
  ]);
