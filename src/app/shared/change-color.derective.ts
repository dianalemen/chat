import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({selector: '[change-color]'})

export class ChangeColorDerective{

    constructor (private el: ElementRef){}

i = 0;
@HostListener('click') onclick() {
  if (this.i % 2) {
    this.changecolor('');
        } else {
    this.changecolor('#D02090');
        }
    this.i++;
}

  private changecolor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

 
    }
