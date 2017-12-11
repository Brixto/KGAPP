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

  constructor(public navCtrl: NavController, private categoryService: CategoryService) {
    this.items = this.categoryService.items;
  }

  openPercentPage() {
    console.log('push');
    this.navCtrl.push(PercentPage, { items: this.items });
  }
}
