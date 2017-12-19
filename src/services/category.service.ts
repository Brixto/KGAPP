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
                'question': 'Zeichne das vorgegebene Bild. Deine Teammitglieder müssen erraten, um was es sich handelt',
            },
            {
                'text': 50,
                'disabled': false,
                'question': 'Zeichne das vorgegebene Bild. Deine Teammitglieder müssen erraten, um was es sich handelt',
            },
            {
                'text': 100,
                'disabled': false,
                'question': 'Zeichne das vorgegebene Bild. Deine Teammitglieder müssen erraten, um was es sich handelt',
            },
        ];
        this.pantomime = [
            {
                'text': 25,
                'disabled': false,
                'question': 'Erkläre deinen Teammitgliedern das vorgegebene Objekt. Du darfst nichts sagen! Gegenstände dürfen nicht verwendet werden.',
            },
            {
                'text': 50,
                'disabled': false,
                'question': 'Erkläre deinen Teammitgliedern das vorgegebene Objekt. Du darfst nichts sagen! Gegenstände dürfen nicht verwendet werden.',
            },
            {
                'text': 100,
                'disabled': false,
                'question': 'Erkläre deinen Teammitgliedern das vorgegebene Objekt. Du darfst nichts sagen! Gegenstände dürfen nicht verwendet werden.',
            },
        ];
        this.feel = [
            {
                'text': 25,
                'disabled': false,
                'question': 'Erfühle den Gegenstand in der Box!',
            },
            {
                'text': 50,
                'disabled': false,
                'question': 'Erfühle den Gegenstand in der Box!',
            },
            {
                'text': 100,
                'disabled': false,
                'question': 'Erfühle den Gegenstand in der Box!',
            },
        ];
        this.hear = [
            {
                'text': 25,
                'disabled': false,
                'question': 'Hör genau hin! Welche(s) Lied(er) erkennst du?',
            },
            {
                'text': 50,
                'disabled': false,
                'question': 'Hör genau hin! Welche(s) Lied(er) erkennst du?',
            },
            {
                'text': 100,
                'disabled': false,
                'question': 'Hör genau hin! Welche(s) Lied(er) erkennst du?',
                'video': 'nuss',
            },
        ];
        this.taste = [
            {
                'text': 25,
                'disabled': false,
                'question': 'Mund auf! Um welche Köstlichkeit(en) handelt es sich?',
            },
            {
                'text': 50,
                'disabled': false,
                'question': 'Mund auf! Um welche Köstlichkeit(en) handelt es sich?',
            },
            {
                'text': 100,
                'disabled': false,
                'question': 'Mund auf! Um welche Köstlichkeit(en) handelt es sich?',
            },
        ];
        this.kga = [
            {
                'text': 25,
                'disabled': false,
                'question': 'Was steht auf den Schuhen von Herrn Angles?',
            },
            {
                'text': 50,
                'disabled': false,
                'question': 'Schätzt die Anzahl der sichtbaren Ordner im Büro Meldewesen. Die Gruppe die am besten schätzt, bekommt die Punkte.',
            },
            {
                'text': 100,
                'disabled': false,
                'question': 'Welche Auszubildenden sind wann da?',
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