import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableServiceService {

  currentFlag?: string;
  menuOverlay: boolean = false;

  constructor() {
    if (!this.currentFlag) {
      this.currentFlag = 'german.png';
    }
  }
}
