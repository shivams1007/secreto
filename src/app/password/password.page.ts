import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/component/header/header.component';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, CommonModule, FormsModule]
})
export class PasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
