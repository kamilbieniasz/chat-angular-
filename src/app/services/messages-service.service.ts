import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/Message-interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {

  private url = 'https://shoutbox-db.herokuapp.com/';
  private isUserLoggedIn;
  login: string;

  constructor( private http: HttpClient) {
    this.isUserLoggedIn = false;
   }


  getMessages(): Observable<Message[]>{
    console.log(this.login);
    return this.http.get<Message[]>(this.url + 'messages');
  }

  postMessage(content: string): Observable<Message[]>{
    if(this.login === undefined){
      this.login = localStorage.getItem('login');
    }
    const currentDate = new Date();
    const message: Partial<Message> = {
      user: this.login,
      content: content,
      date: currentDate,
    };

    return this.http.post<Partial<Message[]>>(this.url + 'messages', message);
  }

  getUserLoggedIn(): boolean{
    if(localStorage.getItem('login') !== null){
      this.isUserLoggedIn = true;
    }
    console.log(this.isUserLoggedIn);
    return this.isUserLoggedIn;
  }


}
