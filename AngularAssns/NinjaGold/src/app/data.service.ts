import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  sum = 0;
  rando = 0;
  messages: String[] = [];

  constructor() { }

  farmGold(sender: string){
    if(sender === 'farm'){
    this.rando = Math.floor(Math.random() * 3) + 2;      
    }
    if(sender === 'cave'){
    this.rando = Math.floor(Math.random() * 5 + 5);      
    }
    if(sender === 'house'){
    this.rando = Math.floor(Math.random() * 8 + 7);      
    }
    if(sender === 'casino'){
    this.rando = Math.floor(Math.random() * 200 - 100);      
    }
    this.sum += this.rando;
    this.log(sender, this.rando);
    return this.rando;
  }

  log(sender: string, gold: number){
    if(gold < 0){
      this.messages.push("You lost " + gold + " gold at the " + sender + ".")
    } else {
        this.messages.push("You earned " + gold + " gold at the " + sender + "!")
    }
  }


}
