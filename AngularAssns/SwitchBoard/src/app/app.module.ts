import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SwitchCompComponent } from './switch-comp/switch-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    SwitchCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
