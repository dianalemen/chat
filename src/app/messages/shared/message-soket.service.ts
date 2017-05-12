import { Injectable, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class MessageSocketService{
socket;

constructor(){
  this.socket = io.connect('http://localhost:3000/')
  this.socket.on('connect', () => {
  this.socket.emit('authenticate', { token: localStorage['token'] });
              });
            }

            joinGroup(text){
              this.socket.emit('message', text);
            }

}