import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({selector: '[change-color]'})

export class ChangeColorDerective{

    constructor (private el: ElementRef){}

   @HostListener('click') onclick() {
    this.changecolor('#D02090');
  }

  private changecolor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

 
    }
