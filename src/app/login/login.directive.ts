import {Input, Directive, OnInit, Output, AfterContentChecked, EventEmitter} from '@angular/core';

@Directive({
    selector:'login-app',
})
export class LoginDirective{
    @Input() nama:string;
    @Input() password:string;
    @Input() first:boolean;
    @Output() message: EventEmitter<string> = new EventEmitter();

    ngAfterContentChecked(){
        if(!this.first)
        {
            if(!this.nama)
                this.message.emit("Name must be filled");
            else if(!this.password)
                this.message.emit("Password empty");
            else if(!this.nameValidate(this.nama))
                this.message.emit("Name invalid");
            else if(!this.passValidate(this.password))
                this.message.emit("Password invalid");
            else
                this.message.emit("Login Success");
        }
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