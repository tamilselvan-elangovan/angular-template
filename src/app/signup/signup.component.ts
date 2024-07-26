import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class SignupComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    name: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
    password: [null, Validators.compose([Validators.required, Validators.minLength(7)])],
    confirmpassword: [null, Validators.compose([Validators.required, Validators.minLength(7)])]
  });

  hasUnitNumber = false;



  onSignup(): void {
    alert('Signup Successfull');
  }
}
