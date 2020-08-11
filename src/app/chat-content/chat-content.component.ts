import { MessagesServiceService } from './../services/messages-service.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Message } from '../interfaces/Message-interface';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit {
  messages: Message[];
  messageContent: string;

  constructor( private messagesService: MessagesServiceService) { }

  ngOnInit(): void {
    this.getMessages()
  }

  getMessages():void{
    this.messagesService.getMessages().subscribe( data => {this.messages = data; });
  }

  newMessage(): void{
    this.messagesService.postMessage(this.messageContent).subscribe();
    this.getMessages();
    this.messageContent = '';
  }

}
