import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from "../categories/categories";
import { ScoreService } from "../../services/score.service";
import { VideoPlayer } from '@ionic-native/video-player';

@Component({
    selector: 'page-question',
    templateUrl: 'question.html'
})
export class QuestionPage {
    item;

    constructor(public navCtrl: NavController, params: NavParams, private scoreService: ScoreService, private videoPlayer: VideoPlayer) {
        this.item = params.data.item;
    }

    playVideo(video) {
        this.videoPlayer.play('file:///android_asset/www/' + video + '.mp4').then(() => {
            console.log('video completed');
        }).catch(err => {
            console.log(err);
        });
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
