import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableServiceService {

  currentFlag?: string;

  constructor() {
    if (!this.currentFlag) {
      this.currentFlag = 'german.png';
    }
  }
}
