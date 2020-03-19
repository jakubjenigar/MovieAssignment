import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'loginForm',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],

})
export class LoginComponent {
  username: string;
  password: string;

  constructor( private router: Router ) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  login(): void {
    if (this.username === 'admin' && this.password === '1234') {
     this.router.navigate(['browse']);
    } else {
      alert('Invalid credentials');
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
