import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  x: Array<any> = [];

  colorPicker(){
    for(let i=0; i<10; i++){
      const randNum = (Math.floor(Math.random() * 6) ) + 1;
      if(randNum === 1){
        this.x.push('red')
      } 
      else if(randNum === 2){
        this.x.push('yellow');
      }
      else if(randNum === 3){
        this.x.push('blue');
      }
      else if(randNum === 4){
        this.x.push('green');
      }
      else if(randNum === 5){
        this.x.push('orange');
      }
      else if(randNum === 6){
        this.x.push('black');
      }
    }
  }

  ngOnInit() {
    this.colorPicker();
  }
}
