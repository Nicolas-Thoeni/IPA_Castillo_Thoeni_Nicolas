import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';

import { OpenQuestionnaireComponent } from '@pages/open-questionnaire/open-questionnaire.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'oq', component: OpenQuestionnaireComponent }
];
