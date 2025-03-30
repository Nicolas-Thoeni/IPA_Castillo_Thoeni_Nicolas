import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { HeaderComponent } from '@sections/header/header.component';

import { ListComponent } from "../../sections/list/list.component";
import { ItemListModel } from '@models/itemList';
import { MainService } from '@services/main.service';

@Component({
    selector: 'app-open-questionnaire',
    imports: [CommonModule, HeaderComponent, ListComponent],
    templateUrl: './open-questionnaire.component.html',
    styleUrls: ['./open-questionnaire.component.css']
})
export class OpenQuestionnaireComponent {
    mainService = inject(MainService)

    items: ItemListModel = {
        keys: [ 'Personalnummer', 'Vorname', 'Nachname', 'Eintrittsdatum'],
        items: Array.from({length: 20}, e => e = [
            '123456789',
            'Max',
            'Muster',
            this.mainService.formatDate(new Date(), 'dd.MM.yyyy')
        ])
    }
}
