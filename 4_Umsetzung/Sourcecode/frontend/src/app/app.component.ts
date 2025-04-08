import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ClipboardComponent } from '@sections/clipboard/clipboard.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ClipboardComponent],
    template: '<app-clipboard></app-clipboard><router-outlet></router-outlet>'
})
export class AppComponent {
    
}
