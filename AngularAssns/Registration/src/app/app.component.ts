import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  user = new User();
  users = [];
  regUser ;
  states: Array<any> = [ "AK - Alaska", 
  "AL - Alabama", 
  "AR - Arkansas", 
  "AS - American Samoa", 
  "AZ - Arizona", 
  "CA - California", 
  "CO - Colorado", 
  "CT - Connecticut", 
  "DC - District of Columbia", 
  "DE - Delaware", 
  "FL - Florida", 
  "GA - Georgia", 
  "GU - Guam", 
  "HI - Hawaii", 
  "IA - Iowa", 
  "ID - Idaho", 
  "IL - Illinois", 
  "IN - Indiana", 
  "KS - Kansas", 
  "KY - Kentucky", 
  "LA - Louisiana", 
  "MA - Massachusetts", 
  "MD - Maryland", 
  "ME - Maine", 
  "MI - Michigan", 
  "MN - Minnesota", 
  "MO - Missouri", 
  "MS - Mississippi", 
  "MT - Montana", 
  "NC - North Carolina", 
  "ND - North Dakota", 
  "NE - Nebraska", 
  "NH - New Hampshire", 
  "NJ - New Jersey", 
  "NM - New Mexico", 
  "NV - Nevada", 
  "NY - New York", 
  "OH - Ohio", 
  "OK - Oklahoma", 
  "OR - Oregon", 
  "PA - Pennsylvania", 
  "PR - Puerto Rico", 
  "RI - Rhode Island", 
  "SC - South Carolina", 
  "SD - South Dakota", 
  "TN - Tennessee", 
  "TX - Texas", 
  "UT - Utah", 
  "VA - Virginia", 
  "VI - Virgin Islands", 
  "VT - Vermont", 
  "WA - Washington", 
  "WI - Wisconsin", 
  "WV - West Virginia", 
  "WY - Wyoming" ]

  onSubmit(){
    this.users.push(this.user);
    this.regUser = this.user;
    this.user = new User();
    console.log(this.user);
    console.log(this.users);
    console.log(this.regUser);
  }



}