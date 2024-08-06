import { SQLiteService } from './../../services/sqlite.service';
import { AuthService } from './../../services/auth.service';
import { Component, EnvironmentInjector, inject, effect } from '@angular/core';
import { IonIcon, IonLabel, IonContent, IonButton, IonPopover, IonItem, IonList, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { keypad, fingerPrint } from 'ionicons/icons';
import { ButtonComponent } from '../shared/components/button/button.component';
import { NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonPopover, IonInputPasswordToggle, IonButton, IonContent, IonIcon, IonLabel, IonList, ButtonComponent, NgIf, FormsModule, ReactiveFormsModule],
})
export class HomePage {
  public environmentInjector = inject(EnvironmentInjector);
  public authService = inject(AuthService);
  private sqliteService = inject(SQLiteService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  keypadType: string = 'text';
  isPwdCreated = this.authService.isPwdCreated();
  passwordForm: FormGroup = this.fb.group({
    password: ['', Validators.required],
    confirm_password: ['']
  });
  constructor(
  ) {
    addIcons({ keypad, fingerPrint });

    effect(() => {
      this.isPwdCreated = this.authService.isPwdCreated();
    });
  }

  changeKeypadType(type: string) {
    this.keypadType = type;
  }

  createMasterPassword() {
    if (this.passwordForm.get('password')?.value && this.passwordForm.get('password')?.value === this.passwordForm.get('confirm_password')?.value) {
      localStorage.setItem('masterPassword', this.passwordForm.get('password')?.value || '');
      this.authService.isPwdCreated.set(true);
      this.passwordForm.reset();
    } else if (this.passwordForm.get('password')?.value) {
      alert('Password and Confirm Password should be same');
    } else {
      alert('Please enter password');
    }
  }

  async confirmPassword() {
    try {
      const masterPassword = localStorage.getItem('masterPassword');
      if (this.passwordForm.get('password')?.value.toString() === masterPassword) {
        await this.authService.authenticated(masterPassword || '');
        this.passwordForm.reset();
        this.router.navigate(['/tabs']);
      } else {
        alert('Invalid Password');
      }
    } catch (error) {
      console.log('error: ', error);
      alert('Invalid Password');
    }
  }
}