import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-comp',
  templateUrl: './switch-comp.component.html',
  styleUrls: ['./switch-comp.component.css']
})
export class SwitchCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

off: boolean = true;


  switchOn(){
    this.off = false;
  }

  switchOff(){
    this.off = true;
  }


}

