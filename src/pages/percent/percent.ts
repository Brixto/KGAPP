import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from "../question/question";

@Component({
  selector: 'page-percent',
  templateUrl: 'percent.html'
})
export class PercentPage {
  items;

  constructor(public navCtrl: NavController, params: NavParams) {
    this.items = params.data.items;
  }

  openQuestion(item) {
    this.navCtrl.push(QuestionPage, { item: item });
  }
}
