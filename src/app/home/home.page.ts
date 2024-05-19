import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonIcon, IonLabel, IonContent, IonButton, IonPopover, IonItem, IonList, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { keypad } from 'ionicons/icons';
import { InputComponent } from '../shared/component/input/input.component';
import { ButtonComponent } from '../shared/component/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonPopover, IonButton, IonContent, IonIcon, IonLabel, IonList, InputComponent, ButtonComponent],
})
export class HomePage {
  public environmentInjector = inject(EnvironmentInjector);
  keypadType: string = 'text';
  constructor() {
    addIcons({ keypad });
  }

  changeKeypadType(type: string) {
    this.keypadType = type;
  }
}