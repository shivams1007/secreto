import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, close, closeCircle, filter, funnel, grid, gridOutline, key, list, listCircle, save, search, settings } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({ save, listCircle, key, settings, search, list, grid, gridOutline, funnel, filter, add, closeCircle, close });
  }
}
