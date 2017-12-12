import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  alphaNumbers: number[] = [];
  betaNumbers: number[] = [];
  total: number[] = [];
  constructor() { }


  retrieveAlphaNumbers(): number[] {
    return this.alphaNumbers;
  }

  retrieveBetaNumbers(): number[] {
    return this.betaNumbers;
  }

  retrieveTotalSum(): number[] {
    return this.total;
  }

  difference() {
    let sumA = 0;
    let sumB = 0;
    for(var i of this.alphaNumbers){
      sumA += i;
    }
    for(var i of this.betaNumbers){
      sumB += i;
    }
    let newTotal = sumA - sumB;
    this.total.push(newTotal);
    return this.total;
  }

  generateAlpha(num: number){
    this.alphaNumbers.push(num);
  }

  generateBeta(num: number){
    this.betaNumbers.push(num);
  }
}
