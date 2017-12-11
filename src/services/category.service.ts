import { Injectable } from '@angular/core';;

@Injectable()
export class CategoryService {
    items;

    constructor() {
        this.items = [
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
    }
}