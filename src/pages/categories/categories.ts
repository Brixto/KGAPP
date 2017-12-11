import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PercentPage } from "../percent/percent";
import { CategoryService } from "../../services/category.service";
import { ScoreService } from "../../services/score.service";

@Component({
  selector: 'categories-about',
  templateUrl: 'categories.html'
})
export class CategoriesPage {

  categories;
  score;
  teams;

  constructor(public navCtrl: NavController, private categoryService: CategoryService, private scoreService: ScoreService) {
    this.categories = this.categoryService.categories;
    this.score = this.scoreService.teams[this.scoreService.active].points;
    this.teams = this.scoreService.teams;
  }

  openPercentPage(category) {
    this.navCtrl.push(PercentPage, { items: category.questions });
  }
}
