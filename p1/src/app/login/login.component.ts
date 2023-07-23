import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onLoginFormSubmit() {
    if (this.loginForm.invalid) {
      if (this.loginForm.get('email')?.invalid) {
        alert('Please enter a valid email address for Sign In.');
      }
      if (this.loginForm.get('password')?.invalid) {
        alert('Please enter a valid password for Sign In. Password must contain at least one lowercase letter, one number, and one special character with a minimum length of 8 characters.');
      }
      return;
    }
    // Process the login form submission
  }
  
  onSignupFormSubmit() {
    if (this.signupForm.invalid) {
      if (this.signupForm.get('email')?.invalid) {
        alert('Please enter a valid email address for Sign Up.');
      }
      if (this.signupForm.get('password')?.invalid) {
        alert('Please enter a valid password for Sign Up. Password must contain at least one lowercase letter, one number, and one special character with a minimum length of 8 characters.');
      }
      return;
    }
    // Process the signup form submission
  }
  
  
}
