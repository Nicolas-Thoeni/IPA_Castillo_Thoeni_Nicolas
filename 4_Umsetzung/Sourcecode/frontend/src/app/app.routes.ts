import { Routes } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { QuestionnaireComponent } from '@pages/questionnaire/questionnaire.component';
import { QuestionnairesComponent } from '@pages/questionnaires/questionnaires.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'open', component: QuestionnairesComponent, data: { type: 'open' } },
    { path: 'filledOut', component: QuestionnairesComponent, data: { type: 'filledOut' } },
    { path: 'done', component: QuestionnairesComponent, data: { type: 'done' } },
    { path: 'qn', component: QuestionnaireComponent }
];
