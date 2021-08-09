import { Component } from '@angular/core';
import Gun from 'gun/gun'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gun: any;

  inT = "";
  outT = "";
  inA = 0;
  outA = 0;

  metaTx: any;
  orders: any;

  data: any[] = [];

  constructor() {

    this.gun = Gun(['https://my-gun-db-test.herokuapp.com/gun', 'https://mvp-gun.herokuapp.com/gun']);

    this.metaTx = this.gun.get('metaTx1');

    this.metaTx.map().on((tx: any, id: any) => {
      if (tx) {
        console.log(tx, id)
        this.data.push(tx);
      }
    })

  }

  addOrder(): void {
    this.metaTx.set({
      inToken: this.inT,
      outToken: this.outT,
      inAmount: this.inA,
      outAmount: this.outA
    });
  }

}
