import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  username: string;
  password: string;
  email: string;
  birthDate: Date;

    form: FormGroup = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    date: new FormControl(''),
  });

  constructor(private router: Router) {}
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  signup() {
    username: document.getElementById('username');
    password: document.getElementById('password');
    email: document.getElementById('email');
    birthDate: document.getElementById('birthDate');

    if (this.username !== undefined && this.password !== undefined && this.email !== undefined && this.birthDate !== undefined) {
    this.router.navigate(['log_in']);
    } else {
        alert('Something went wrong :/');
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
