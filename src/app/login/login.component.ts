import { MessagesServiceService } from './../services/messages-service.service';
import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users = faUsers;
  login: string;

  constructor(
    private messagesService: MessagesServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  joinToChat(): void{
    this.messagesService.login = this.login;
    localStorage.setItem('login', this.login);
    this.router.navigate(['/chat']);
  }



}
