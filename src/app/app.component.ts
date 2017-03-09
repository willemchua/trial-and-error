import { Component, Input, DoCheck} from '@angular/core';
import { LoginDirective } from './login/login.directive';

@Component(
    {
        selector: 'my-app',
        template: `
        <h2>Login</h2>
        <input id = "name" type="text" placeholder="Insert name here"/>
        <input id = "pass" type="password" placeholder="Insert password here">
        <input type="button" (click) = onYouGo() value="Hey"> 
        <login-app [nama] = "name" [password] = "pass" [first] = "first" (message) = "msg=($event)"></login-app>
        <p> {{msg}} </p>
        `
    }
)
export class AppComponent{
    name: string;
    pass: string;
    msg:string;
    first:boolean = true;

    onYouGo(){
        this.first = false;
        this.name = (document.getElementById("name") as HTMLInputElement).value;
        this.pass = (document.getElementById("pass") as HTMLInputElement).value;
    }
}