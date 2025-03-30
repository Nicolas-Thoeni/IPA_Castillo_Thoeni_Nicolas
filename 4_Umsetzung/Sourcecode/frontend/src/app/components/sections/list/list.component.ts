import { CommonModule } from '@angular/common';
import { Component, inject, Injector, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';

import { QuestionnaireItemModel } from '@models/questionnaireItem';

import { ItemComponent } from '@sections/item/item.component';

import { ListService } from '@services/list.service';

@Component({
    selector: 'app-list',
    imports: [CommonModule, ItemComponent],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    listService = inject(ListService);

    @Input() content: Array<any> = []; 
    @Input() items: Array<QuestionnaireItemModel> = this.listService.open();

    @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;

    constructor(private injector: Injector) {}

    isComponent(value: any): boolean {
        return value instanceof Type;
    }

    renderComponent(component: Type<any>): void {
        if (!this.dynamicComponent) return
        this.dynamicComponent.clear();
        this.dynamicComponent.createComponent(component, {
            injector: this.injector,
        });
    }
    
    ngAfterViewInit(): void {
        this.content.forEach((item) => {
            if (this.isComponent(item)) {
                this.renderComponent(item);
            }
        });
    }
}
