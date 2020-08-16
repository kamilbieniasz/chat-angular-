import { AuthGuard } from './auth.guard';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'chat', canActivate: [AuthGuard], component: ChatContentComponent},
    {path: '**', component: AppComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}