import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.page.html',
  styleUrls: ['./entries.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class EntriesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
