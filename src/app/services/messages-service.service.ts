import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/Message-interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {

  private url = 'http://localhost:3000';
  login: string;

  constructor( private http: HttpClient) { }


  getMessages(): Observable<Message[]>{
    console.log(this.login);
    return this.http.get<Message[]>(this.url + '/messages');
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

    return this.http.post<Partial<Message[]>>(this.url + '/messages', message);
  }

  

}
