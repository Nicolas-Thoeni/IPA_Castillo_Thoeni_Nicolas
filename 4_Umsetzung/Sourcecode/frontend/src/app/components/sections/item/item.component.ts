import { CommonModule } from '@angular/common';
import { Component, effect, HostBinding, inject, Input } from '@angular/core';

import { QuestionnaireItemModel } from '@models/questionnaireItem';

import { ListService } from '@services/list.service';
import { MainService } from '@services/main.service';

@Component({
    selector: 'app-item',
    imports: [CommonModule],
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    mainService = inject(MainService);
    listService = inject(ListService);

    @Input() item: QuestionnaireItemModel = {
        personalNumber: '1234567',
        name: 'Max',
        surname: 'Muster',
        entryDate: new Date()
    }

    @HostBinding('class.open') open = false;

    constructor() {
        effect(() => {
            this.open = this.listService.isOpen(this.item.personalNumber);
        });
    }

    getStatus(): string | undefined {
        if (this.item.status == 'ok') return 'Ok'
        if (this.item.status == 'pd') return 'Personalarzt'
        return 'Pflege'
    }

    handleClipboard(): void {
        this.mainService.setClipboard(this.item.personalNumber)
    }

    handleOpen(): void {
        if (this.listService.isOpen(this.item.personalNumber)) this.listService.currentItem.set(null)
        else this.listService.currentItem.set(parseInt(this.item.personalNumber))
    }

    handleOpenQA() {
        console.error(``)
    }

    handleDownload() {
        console.error('No pdf found')
    }
}
