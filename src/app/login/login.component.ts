import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'txs-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  email(): any {
    return this.loginForm.get('email');
  }

  onLogin(): void {
    if (
      this.loginForm.value.email != null ||
      this.loginForm.value.email != undefined
    ) {
      localStorage.setItem('email', this.loginForm.value.email);
      console.log(this.loginForm.value);
      console.log(localStorage.getItem('email'));
    }
  }
}
