import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
    selector: 'app-questionnaire-part-one',
    imports: [ReactiveFormsModule],
    templateUrl: './questionnaire-part-one.component.html',
    styleUrl: './questionnaire-part-one.component.css'
})
export class QuestionnairePartOneComponent {
    personForm = new FormGroup({
        name: new FormControl('')
    })
}
