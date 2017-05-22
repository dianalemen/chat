import { Injectable, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class MessageSocketService{
socket;

constructor(){
  this.socket = io.connect('https://safe-everglades-93622.herokuapp.com/')
  //this.socket = io.connect('http://localhost:3000/')
  this.socket.on('connect', () => {
  this.socket.emit('authenticate', { token: localStorage['token'] });
              });
            }

    joinGroup(text){
              this.socket.emit('message', text);
    }
            
    isTyping() {
        this.socket.emit('is typing')
    }

    stopTyping() {
        this.socket.emit('stop typing')
    }

    typing() {
        let observable = new Observable(observer => {
            this.socket.on('typing', user => observer.next(user.username))
        })
        return observable
    }

    notTyping(){
        let observable = new Observable(observer => {
            this.socket.on('stop typing', user => {
                observer.next(user.username)
            })
        })
        return observable
    }

}