import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {
    score = 0;
    teams;
    active = 0;

    constructor() {
        this.teams = [
            {
                'name': 'Pumuckel',
                'points': 0,
            },
            {
                'name': 'Gandalf',
                'points': 0,
            },
        ];
    }
}