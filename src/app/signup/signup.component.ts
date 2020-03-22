import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  username: string;
  password: string;
  email: string;

    form: FormGroup = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private router: Router, private snackBar: MatSnackBar,) {}
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  signup() {
    username: document.getElementById('username');
    password: document.getElementById('password');
    email: document.getElementById('email');

    if (this.username !== undefined && this.password !== undefined && this.email !== undefined) {
    this.router.navigate(['log_in'], {state: {data: {username: this.username, password: this.password}}});
    } else {
      this.snackBar.open('Please fill out all the fields', 'Dismiss');;
    }
  }



  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
