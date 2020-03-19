import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'loginForm',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],

})
export class LoginComponent {


 public function ;submit () {
 console.log('User Name: ' + SignupComponent.username);
 console.log('Password: ' + SignupComponent.password);
 if (this.form.valid) {
  this.submitEM.emit(this.form.value);
}

 }
  constructor( ) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

 

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
