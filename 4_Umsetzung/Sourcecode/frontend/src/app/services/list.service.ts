import { Injectable, signal } from '@angular/core';
import { QuestionnaireItemModel } from '@models/questionnaireItem';

@Injectable({
    providedIn: 'root'
})
export class ListService {
    testDataLength: number = 100;

    fields: Array<any> = ['Personalnummer', 'Vorname', 'Nachname', 'Eintrittsdatum', 'Status', 'Erledigt'];

    currentItem = signal<number | null>(null);

    open = signal<Array<QuestionnaireItemModel>>(
        Array.from({ length: this.testDataLength }, (): QuestionnaireItemModel => ({
            personalNumber: this.getRandomPersonalNumber(),
            name: 'Max',
            surname: 'Muster',
            entryDate: this.getRandomDate()
        }))
    );
    
    filledOut = signal<Array<QuestionnaireItemModel>>(
        Array.from({ length: this.testDataLength }, (): QuestionnaireItemModel => ({
            personalNumber: this.getRandomPersonalNumber(),
            name: 'Max',
            surname: 'Muster',
            entryDate: this.getRandomDate(),
            status: this.getRandomStatus(),
            remark: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        }))
    );

    done = signal<Array<QuestionnaireItemModel>>(
        Array.from({ length: this.testDataLength }, (): QuestionnaireItemModel => ({
            personalNumber: this.getRandomPersonalNumber(),
            name: 'Max',
            surname: 'Muster',
            entryDate: this.getRandomDate(),
            status: this.getRandomStatus(),
            remark: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            done: this.getRandomBoolean()
        }))
    );
    
    constructor() { }

    isOpen(pn: string): boolean {
        if (parseInt(pn) == this.currentItem()) return true
        return false
    }

    getRandomPersonalNumber(): string {
        return Math.floor(100000000 + Math.random() * 900000000).toString();
    }
    
    getRandomDate(): Date {
        const start = new Date(2000, 0, 1).getTime();
        const end = new Date().getTime();
        const randomTime = Math.floor(Math.random() * (end - start)) + start;
        return new Date(randomTime);
    }
    
    getRandomStatus(): 'pd' | 'nursing' | 'ok' {
        const statuses: Array<'pd' | 'nursing' | 'ok'> = ['pd', 'nursing', 'ok'];
        return statuses[Math.floor(Math.random() * statuses.length)];
    }
    
    getRandomBoolean(): boolean {
        return Math.random() < 0.5;
    }
}
