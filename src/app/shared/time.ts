import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time'})
export class TimePipe implements PipeTransform{
    transform(value) {
         value = new Date;
         return value.getHours();
    } 
}