import { Component, Input, DoCheck} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Component(
    {
        selector: 'my-app',
        template: `
        <h2>App</h2>
        <router-outlet></router-outlet>
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