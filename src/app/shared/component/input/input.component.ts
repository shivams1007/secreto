import { Component, Input, OnInit } from '@angular/core';
import { IonLabel, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [IonInput, IonInputPasswordToggle, IonLabel]
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() passwordToggle: boolean = false;
  constructor() { }

  ngOnInit() { }

}
