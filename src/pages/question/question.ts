import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from "../categories/categories";
import { ScoreService } from "../../services/score.service";

@Component({
    selector: 'page-question',
    templateUrl: 'question.html'
})
export class QuestionPage {
    item;

    constructor(public navCtrl: NavController, params: NavParams, private scoreService: ScoreService) {
        this.item = params.data.item;
    }

    correct(correct) {
        this.item.disabled = true;

        if (correct) {
            this.scoreService.teams[this.scoreService.active].points += this.item.text;
        }
        this.scoreService.active++;
        if (this.scoreService.active === 2) this.scoreService.active = 0;
        this.navCtrl.push(CategoriesPage);
    }
}
