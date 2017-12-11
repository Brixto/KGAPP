import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from "../categories/categories";

@Component({
    selector: 'page-question',
    templateUrl: 'question.html'
})
export class QuestionPage {
    item;

    constructor(public navCtrl: NavController, params: NavParams) {
        this.item = params.data.item;
    }
    
    correct(correct) {
        this.item.disabled = true;
        this.navCtrl.push(CategoriesPage);
    }
}
