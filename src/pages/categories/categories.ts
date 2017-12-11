import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PercentPage } from "../percent/percent";

@Component({
  selector: 'categories-about',
  templateUrl: 'categories.html'
})
export class CategoriesPage {

  items;

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        'text': '25%',
        'disabled': false,
        'question': 'Zeichne eine Schneeflocke',
      },
      {
        'text': '50%',
        'disabled': true,
        'question': 'Zeichne die Morizkirche',
      },
      {
        'text': '100%',
        'disabled': false,
        'question': 'Zeichne einen Weihnachtsmarktstand',
      },
    ];
  }

  openPercentPage() {
    console.log('push');
    this.navCtrl.push(PercentPage, { items: this.items });
  }
}
