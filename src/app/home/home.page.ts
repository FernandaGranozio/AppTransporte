import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  km='';
  motorista=0;
  app=0;
  precofinal=0;

  constructor() {}



  Calcular(){
    this.precofinal=parseFloat(this.km)*3.5;

    if (this.precofinal>150) {
      this.motorista=this.precofinal*0.8;
      this.app=this.precofinal*0.2;

    } else {
      this.motorista=this.precofinal*0.75;
      this.app=this.precofinal*0.25;

    }
  }

}
