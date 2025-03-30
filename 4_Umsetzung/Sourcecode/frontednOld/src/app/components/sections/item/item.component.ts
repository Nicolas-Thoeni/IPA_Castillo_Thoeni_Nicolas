import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, ViewContainerRef, OnInit, Injector, Type, ViewChild } from '@angular/core';

@Component({
    selector: 'app-item',
    imports: [CommonModule],
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input() content: Array<any> = [];

    @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;

    constructor(private injector: Injector) {}

    isComponent(value: any): boolean {
        return value instanceof Type;
    }

    renderComponent(component: Type<any>): void {
        if (this.dynamicComponent) {
            this.dynamicComponent.clear();
            this.dynamicComponent.createComponent(component, {
                injector: this.injector,
            });
        }
    }
    
    ngAfterViewInit(): void {
        this.content.forEach((item) => {
            if (this.isComponent(item)) {
                this.renderComponent(item);
            }
        });
    }
}
