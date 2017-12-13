// Copy & paste to app.module.ts -->
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClient,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }

///// in each component.ts add this: ///

import { DataService } from '../data.service'
constructor(private _dataService: DataService) { }

////////////////////////////////////////

ng generate class "Class Name Here" --> creates new class object

export class User {
	constructor(
	  public id: number = null,
	  public first_name: string = "",
	  public last_name: string = "",
	  public email: string = "",
	  public password: string = "",
	  public created_at: Date = new Date(),
	  public updated_at: Date = new Date()
	){}
  }

//////////////////////////////////////
ng new 'project-name' --routing

ng generate service 'service-name'


ng generate class 'class-name'

