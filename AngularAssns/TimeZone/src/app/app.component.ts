import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  lastTimeZoneSelected = null;
  clear: boolean = true;
  

getDateByZone(timezone) {
  this.today = new Date();
  this.clear = true;
  if (timezone === 'MST') {
    this.clear = true;
    this.today.setHours(this.today.getHours() - 1);
  } else if (timezone === 'PST') {
    this.clear = true;
    this.today.setHours(this.today.getHours() - 2);
  } else if (timezone === 'EST') {
    this.clear = true;
    this.today.setHours(this.today.getHours() + 1);
  }
  this.lastTimeZoneSelected = timezone;
}

clearZone(){
  this.clear = false;
  this.lastTimeZoneSelected = null;

}


}
