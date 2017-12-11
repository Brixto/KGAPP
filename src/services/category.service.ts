import { Injectable } from '@angular/core';;

@Injectable()
export class CategoryService {
    draw; pantomime; feel; taste; kga; hear; explain; christmas;
    categories;

    constructor() {
        this.draw = [
            {
                'text': 25,
                'disabled': false,
                'question': 'Zeichne eine Schneeflocke',
            },
            {
                'text': 50,
                'disabled': false,
                'question': 'Zeichne die Morizkirche',
            },
            {
                'text': 100,
                'disabled': false,
                'question': 'Zeichne einen Weihnachtsmarktstand',
            },
        ];
        this.pantomime = [
            {
                'text': 25,
                'disabled': false,
                'question': '?',
            },
            {
                'text': 50,
                'disabled': false,
                'question': '?',
            },
            {
                'text': 100,
                'disabled': false,
                'question': '?',
            },
        ];
        this.categories = [
            {
                'name': 'Zeichnen',
                'icon': 'brush',
                'questions': this.draw,
            },
            {
                'name': 'Erklären',
                'icon': 'chatbubbles',
                'questions': this.explain,
            },
            {
                'name': 'Pantomime',
                'icon': 'body',
                'questions': this.pantomime,
            },
            {
                'name': 'Hören',
                'icon': 'volume-up',
                'questions': this.hear,
            },
            {
                'name': 'Schmecken',
                'icon': 'pizza',
                'questions': this.taste,
            },
            {
                'name': 'Weihnachtswissen',
                'icon': 'bonfire',
                'questions': this.christmas,
            },
            {
                'name': 'Fühlen',
                'icon': 'hand',
                'questions': this.feel,
            }
        ];
    }
}