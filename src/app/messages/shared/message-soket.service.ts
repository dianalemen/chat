import { Injectable, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class MessageSocketService{
socket;

getMessages(){ 
  this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
    this.socket.on('connect', () => {
                  this.socket.emit('authenticate', { token: localStorage['token'] });
              }),

              this.socket.on('message', (msg) => {
                  console.log('message', msg)
              }) 

  this.socket.on('leave', msg => {
    console.log(msg);
  });
}
joinGroup(){
    this.socket.emit('message', "jkfdlkfjsdkljf");
}
}