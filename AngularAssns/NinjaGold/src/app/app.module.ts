import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { GoldCountComponent } from './gold-count/gold-count.component';
import { LocationsComponent } from './locations/locations.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    GoldCountComponent,
    LocationsComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
