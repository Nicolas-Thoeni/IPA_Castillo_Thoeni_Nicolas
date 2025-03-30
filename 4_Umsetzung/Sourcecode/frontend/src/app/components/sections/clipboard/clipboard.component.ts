import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { MainService } from '@services/main.service';

@Component({
    selector: 'app-clipboard',
    imports: [CommonModule],
    templateUrl: './clipboard.component.html',
    styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent {
    mainService = inject(MainService);
}
