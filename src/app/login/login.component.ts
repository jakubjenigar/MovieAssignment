import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
<<<<<<< HEAD
import { SignupComponent } from '../signup/signup.component';
=======
import {Router} from '@angular/router';
>>>>>>> master
@Component({
  selector: 'loginForm',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],

})
export class LoginComponent {
<<<<<<< HEAD


 public function ;submit () {
 console.log('User Name: ' + SignupComponent.username);
 console.log('Password: ' + SignupComponent.password);
 if (this.form.valid) {
  this.submitEM.emit(this.form.value);
}

 }
  constructor( ) {}
=======
  username: string;
  password: string;

  constructor( private router: Router ) {}
>>>>>>> master

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

 

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
