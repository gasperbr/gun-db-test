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

  data: any[] = [];

  constructor() {
    this.gun = Gun(['https://my-gun-db-test.herokuapp.com/gun', 'https://mvp-gun.herokuapp.com/gun', 'https://e2eec.herokuapp.com/gun']);
    this.metaTx = this.gun.get('metaTx');
    this.metaTx.on((entry: any) => {
      this.data.push({ ...entry });
    });
  }

  addOrder(): void {
    this.metaTx.put({
      inToken: this.inT,
      outToken: this.outT,
      inAmount: this.inA,
      outAmount: this.outA
    });
  }

}
