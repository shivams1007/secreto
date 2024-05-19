import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon]
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'primary';
  @Input() expand: string = 'block';
  @Input() fill: string = 'solid';
  @Input() size: string = 'default';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() text: string = '';
  constructor() { }

  ngOnInit() { }

}
