import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonSearchbar, IonInput, ActionSheetController, IonIcon, IonSelect, IonSelectOption, IonButton, IonList, IonItem, IonGrid, IonRow, IonCol, IonFabButton, IonFabList, IonFab, IonAvatar, IonModal, IonButtons, IonHeader, IonToolbar, IonTitle, IonLabel, IonTextarea, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.page.html',
  styleUrls: ['./entries.page.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, IonInputPasswordToggle, IonTextarea, IonLabel, IonTitle, IonToolbar, IonHeader, IonButtons, IonModal, IonAvatar, IonFab, IonFabList, IonFabButton, IonCol, IonFabButton, IonRow, IonSelect, IonGrid, IonSelectOption, IonItem, IonList, IonButton, IonInput, IonSearchbar, IonContent, CommonModule, FormsModule, HeaderComponent, IonIcon, ButtonComponent]
})
export class EntriesPage implements OnInit {
  isGridView: boolean = false;
  isModalOpen: boolean = false;
  entryFrom = this.formBuilder.group({
    title: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    url: [''],
    desc: [''],
  });
  constructor(private actionSheetCtrl: ActionSheetController, private formBuilder: FormBuilder) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Sort By',
      mode: 'ios',
      buttons: [
        {
          text: 'A -> Z',
          data: {
            action: 'az',
          },
        },
        {
          text: 'Z -> A',
          data: {
            action: 'za',
          },
        },
        {
          text: 'Newest -> Oldest',
          data: {
            action: 'no',
          },
        },
        {
          text: 'Oldest -> Newest',
          data: {
            action: 'on',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const { data } = await actionSheet.onDidDismiss();
    console.log('action: ', data.action);
    if (data.action !== 'cancel') {
      // this.sortBy(data.action);
    }
  }

  ngOnInit() {
  }

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  addEntry() {
    this.entryFrom.markAllAsTouched();
    if (this.entryFrom.valid) {
      console.log('entryFrom: ', this.entryFrom.value);
      this.isModalOpen = false;
    } else {
      alert('Please fill all the required fields');
    }
  }


}
