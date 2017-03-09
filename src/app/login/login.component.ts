import {Input, Component, OnInit, Output, AfterContentChecked, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    selector:'login',
    template: `
        <h2>Login</h2>
        <input id = "name" type="text" placeholder="Insert name here"/>
        <input id = "pass" type="password" placeholder="Insert password here">
        <input type="button" (click) = onYouGo() value="Hey"> 
        <p> {{msg}} </p>
    `
})
export class LoginComponent{

    name: string;
    pass: string;
    msg:string;
    first:boolean = true;
    
    constructor(public route:Router){}

    onYouGo(){
        this.first = false;
        this.name = (document.getElementById("name") as HTMLInputElement).value;
        this.pass = (document.getElementById("pass") as HTMLInputElement).value;

        if(!this.first)
        {
            if(!this.name)
                this.msg = "Name must be filled";
            else if(!this.pass)
                this.msg = "Password empty";
            else if(!this.nameValidate(this.name))
                this.msg = "Name invalid";
            else if(!this.passValidate(this.pass))
                this.msg = "Password invalid";
            else
                {
                    this.msg = "Login Success";
                    this.route.navigate(['/home']);
                }
        }

    }

    ngAfterContentChecked(){
    }

    nameValidate(name:string):boolean
    {
        if(name.match(/^.{10,30}$/))
            return true;
        else
            return false;
    }

    passValidate(pass:string):boolean
    {
        if(pass.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/))
            return true;
        else
            return false;
    }
}