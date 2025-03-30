import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { MainService } from '@services/main.service';

import { ItemListModel } from '@models/itemList';

import { ItemComponent } from '@sections/item/item.component';

@Component({
    selector: 'app-list',
    imports: [CommonModule, ItemComponent],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    mainService = inject(MainService)

    @Input() items: ItemListModel = {
        keys: ['Personalnummer', 'Vorname', 'Nachname', 'Eintrittsdatum', 'Testing'],
        items: Array.from({length: 100}, e => e = [
            '123456789',
            'Max',
            'Muster',
            this.mainService.formatDate(new Date(), 'dd.MM.yyyy')
        ])
    }
}
