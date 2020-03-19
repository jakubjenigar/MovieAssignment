import { SignupComponent } from './../signup/signup.component';
import { Router } from '@angular/router';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'loginForm',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  constructor(private router: Router) {}

  form: FormGroup = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });

  login(): void {
    if (this.username === history.state.data.username && this.password === history.state.data.password) {
      this.router.navigate(['browse']);
    } else {
      alert('Invalid credentials :/');
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
