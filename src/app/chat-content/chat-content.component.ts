import { MessagesServiceService } from './../services/messages-service.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Message } from '../interfaces/Message-interface';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit, OnDestroy {
  messages: Message[];
  messageContent: string;
  private subscription = new Subscription();

  constructor( private messagesService: MessagesServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getMessages();
    this.autoRefresh();
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  getMessages(): void{
    const sub = this.messagesService.getMessages().subscribe( data => {this.messages = data; });
    this.subscription.add(sub);
  }

  newMessage(): void{
    this.messagesService.postMessage(this.messageContent).subscribe();
    this.getMessages();
    this.messageContent = '';
    this.autoRefresh();
  }

  autoRefresh(): void{
    setInterval(() => {
      this.getMessages();
    }, 5000);
  }

  logout(): void{
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }

}
