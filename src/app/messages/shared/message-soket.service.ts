import { Injectable, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class MessageSocketService{
socket;

constructor(){
  this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000')
  this.socket.on('connect', () => {
  this.socket.emit('authenticate', { token: localStorage['token'] });
              });
            }

            onMessages(){
              this.socket.on('message', (msg) => {
                console.log('message', msg);
                })
            }

            joinGroup(){
              this.socket.emit('message', 'message from angular');
            } 

}