import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../sections/header/header.component";
import { QuestionnairePartOneComponent } from "../../sections/questionnaire-part-one/questionnaire-part-one.component";
import { QuestionnairePartTwoComponent } from "../../sections/questionnaire-part-two/questionnaire-part-two.component";

@Component({
    selector: 'app-questionnaire',
    imports: [CommonModule, HeaderComponent, QuestionnairePartOneComponent, QuestionnairePartTwoComponent],
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
    part: number = 1

    getTitle(header: boolean): string {
        if (header) return `Gesundheitsfragebogen - Teil ${this.part}`
        return this.part == 1 ? 'Personalien und Funktion' : 'Dokumentation Impfungen und Fragen zu Tuberkulose'
    }
}
