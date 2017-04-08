import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class MessageSocketService{
socket;

getMessages(){ 
  this.socket = io.connect('ws://front-camp-chat.herokuapp.com/socket.io/');
    this.socket.on('message', msg => {
    console.log('message', msg);
  });

  this.socket.on('join', msg => {
    console.log(msg);
  });

  this.socket.on('leave', msg => {
    console.log(msg);
  });
}
joinGroup(){
    this.socket.emit('message', "jkfdlkfjsdkljf");
}
}