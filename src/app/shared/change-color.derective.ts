import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({selector: '[change-color]'})

export class ChangeColorDerective{

    constructor (private el: ElementRef){}

   @HostListener('click') onclick($event) {
    this.changecolor('#D02090', event);
  }

  private changecolor(color: string, e) {
    let el = e.target.parentElement;
    el.style.backgroundColor = color;
  }

 
    }
