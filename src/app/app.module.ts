import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PercentPage } from "../pages/percent/percent";
import { CategoriesPage } from "../pages/categories/categories";
import { QuestionPage } from "../pages/question/question";
import { CategoryService } from "../services/category.service";
import { ScoreService } from "../services/score.service";
import { VideoPlayer } from "@ionic-native/video-player";

@NgModule({
  declarations: [
    MyApp,
    CategoriesPage,
    ContactPage,
    HomePage,
    PercentPage,
    QuestionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriesPage,
    ContactPage,
    HomePage,
    PercentPage,
    QuestionPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    ScoreService,
    VideoPlayer,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
