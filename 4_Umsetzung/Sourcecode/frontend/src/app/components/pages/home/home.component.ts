import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { routes } from '../../../app.routes';
import { MainService } from '@services/main.service';

@Component({
    selector: 'app-home',
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    mainService = inject(MainService);

    routes: Array<string> = [];

    ngOnInit() {
        this.routes = routes.map(e => e.path!.toString());
        this.routes.shift();
        this.mainService.currentPage.set('home');
    }

    getLocation(route: string): string {
        return `/${route}`;
    }
}
