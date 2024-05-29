import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonIcon, IonLabel, IonContent, IonButton, IonPopover, IonItem, IonList, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { keypad, fingerPrint } from 'ionicons/icons';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonPopover, IonButton, IonContent, IonIcon, IonLabel, IonList, InputComponent, ButtonComponent, NgIf],
})
export class HomePage {
  public environmentInjector = inject(EnvironmentInjector);
  keypadType: string = 'text';
  isCreate: boolean = false;
  constructor() {
    addIcons({ keypad, fingerPrint });
  }

  changeKeypadType(type: string) {
    this.keypadType = type;
  }

  toggle() {
    this.isCreate = !this.isCreate;
  }
}