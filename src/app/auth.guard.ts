import { MessagesServiceService } from './services/messages-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private messagesService: MessagesServiceService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(localStorage.getItem('login') !== null){
      return true;
    }else{
      this.router.navigate(['login']);
    }
  }
}
