import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches: Array<any> = [true, true, true, true, true, true, true, true, true, true];
  
  switchOn(idx){
    this.switches[idx] = !this.switches[idx]
  }
}
