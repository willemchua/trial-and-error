import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginDirective }  from './login/login.directive';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, LoginDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
