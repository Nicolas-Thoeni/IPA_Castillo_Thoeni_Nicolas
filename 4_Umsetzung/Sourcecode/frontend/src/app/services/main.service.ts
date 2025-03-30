import { Injectable, signal } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

import { format } from 'date-fns';

import { currentPage } from '@models/trypes';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    currentPage = signal<currentPage>('home');
    clipboard = signal<{ open: boolean, message: string }>({ open: false, message: '' });

    private clipboardTimeout: any;

    constructor(private cb: Clipboard) {}

    formatDate(d: Date, f?: string): string {
        return format(d, f ? f : 'HH:mm dd.MM.yyyy');
    }

    setClipboard(message: string): void {
        if (this.clipboardTimeout) clearTimeout(this.clipboardTimeout);

        this.clipboard.set({ open: true, message });
        this.copyToClipboard(message)

        this.clipboardTimeout = setTimeout(() => {
            this.clipboard.update(state => ({ ...state, open: false }));
        }, 1000);
    }

    copyToClipboard(message: string): void {
        if (this.cb.copy(message)) {
            console.log(`Copied: ${message}`);
        } else {
            console.error('Failed to copy!');
        }
    }
}
