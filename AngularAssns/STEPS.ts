// Copy & paste to app.module.ts -->

import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

@NgModule({ 
	declarations: [ 
		AppComponent
	], 
	imports: [
		BrowserModule,
		FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
	], 
	providers: [], 
	bootstrap: [AppComponent] 
}) 

export class AppModule { }

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