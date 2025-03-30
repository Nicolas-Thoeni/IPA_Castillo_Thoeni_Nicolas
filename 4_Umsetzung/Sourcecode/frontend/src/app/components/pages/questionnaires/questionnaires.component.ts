import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionnaireItemModel } from '@models/questionnaireItem';

import { ClipboardComponent } from '@sections/clipboard/clipboard.component';
import { HeaderComponent } from '@sections/header/header.component';
import { ListComponent } from '@sections/list/list.component';

import { ListService } from '@services/list.service';
import { MainService } from '@services/main.service';

@Component({
    selector: 'app-questionnaires',
    imports: [HeaderComponent, ListComponent, ClipboardComponent],
    templateUrl: './questionnaires.component.html',
    styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent {
    mainService = inject(MainService);
    listService = inject(ListService);

    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe(data => {
            this.mainService.currentPage.set(data['type'])
        });
    }

    getTite(): string {
        if (this.mainService.currentPage() == 'open') return 'Offene Fragebögen';
        if (this.mainService.currentPage() == 'filledOut') return 'Ausgefüllte Fragebögen';
        return 'Erledigte Fragebögen';
    }

    getContent(): Array<any> {
        if (this.mainService.currentPage() == 'open') return this.listService.fields.slice(0, 4);
        if (this.mainService.currentPage() == 'filledOut') return this.listService.fields.slice(0, 5);
        return this.listService.fields;
    }

    getList(): Array<QuestionnaireItemModel> {
        if (this.mainService.currentPage() == 'open') return this.listService.open();
        if (this.mainService.currentPage() == 'filledOut') return this.listService.filledOut();
        return this.listService.done();
    }
}
