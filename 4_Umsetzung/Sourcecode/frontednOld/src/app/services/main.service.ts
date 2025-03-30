import { Injectable } from '@angular/core';

import { format } from 'date-fns';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor() { }

    formatDate(d: Date, f?: string): string {
        return format(d, f ? f : 'HH:mm dd.MM.yyyy')
    }
}
