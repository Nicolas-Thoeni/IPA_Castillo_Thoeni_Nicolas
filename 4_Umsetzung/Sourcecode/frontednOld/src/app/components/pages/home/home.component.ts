import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { routes } from '../../../app.routes';

@Component({
    selector: 'app-home',
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    routes: Array<string> = []

    ngOnInit() {
        this.routes = routes.map(e => e.path!.toString())
        this.routes.shift()
    }

    getLocation(route: string): string {
        return `/${route}`
    }
}
