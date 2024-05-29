import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonButtons, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton]
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() back: boolean = false;

  constructor() { }

  ngOnInit() { }

}
