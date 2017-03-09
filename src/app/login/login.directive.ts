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
        if(this.nama && this.password && !this.first)
            this.message.emit("Login Success");
        else if(!this.first)
            this.message.emit("Login Fail");
    }
}