import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appWheelTracker]'
})
export class WheelTrackerDirective {
  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();

  @HostListener('wheel', ['$event'])
    Wheel(event) {
      const change = event.deltaY;
      if (change > 0) { this.mouseWheelUp.emit(1); }
      if (change < 0) { this.mouseWheelDown.emit(2); }
    }
}
