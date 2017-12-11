import { Injectable } from '@angular/core';;

@Injectable()
export class CategoryService {
    draw;
    categories;

    constructor() {
        this.draw = [
            {
                'text': '25%',
                'disabled': false,
                'question': 'Zeichne eine Schneeflocke',
            },
            {
                'text': '50%',
                'disabled': false,
                'question': 'Zeichne die Morizkirche',
            },
            {
                'text': '100%',
                'disabled': false,
                'question': 'Zeichne einen Weihnachtsmarktstand',
            },
        ];
        this.categories = [
            {
                'name': 'Zeichnen',
                'icon': 'brush',
                'questions': this.draw,
            }
        ];
    }
}