import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { IonLabel, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
  imports: [IonInput, IonInputPasswordToggle, IonLabel, FormsModule, ReactiveFormsModule]
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() passwordToggle: boolean = false;
  // @Input() formControlName!: string;
  constructor() {
  }

  ngOnInit() { }

  writeValue(value: number): void {
    console.log('value: ', value);
  }

  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

}
