import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({selector: '[hightlight]'})

export class HightLightDerective{

    constructor (private el: ElementRef){}


i = 0;
@HostListener('click') onclick() {
  if (this.i % 2) {
    this.highlight('');
    this.i=0;
        } else {
    this.highlight('#990E79');
        }
    this.i++;
}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    
      }
}