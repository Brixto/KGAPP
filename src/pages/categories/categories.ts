import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PercentPage } from "../percent/percent";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'categories-about',
  templateUrl: 'categories.html'
})
export class CategoriesPage {

  items;
  categories;

  constructor(public navCtrl: NavController, private categoryService: CategoryService) {
    this.items = this.categoryService.items;
    this.categories = this.categoryService.categories;
  }

  openPercentPage(category) {
    console.log(category);
    this.navCtrl.push(PercentPage, { items: category.questions });
  }
}
