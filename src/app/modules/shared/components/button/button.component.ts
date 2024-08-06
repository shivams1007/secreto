import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, NgClass]
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'primary';
  @Input() expand: string = 'block';
  @Input() fill: string = 'solid';
  @Input() size: string = 'default';
  @Input() type: 'icon' | 'normal' = 'normal';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() class: string = '';

  constructor() { }

  ngOnInit() { }

}
