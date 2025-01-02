import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableServiceService {

  currentFlag?: string;
  menuOverlay: boolean = false;
  changeHeightOfIAmElement: boolean = false;
  iAm: boolean = true;

  constructor() {
    if (!this.currentFlag) {
      this.currentFlag = 'german.png';
    }
  }
}
