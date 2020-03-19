import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'loginForm',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],

})
export class LoginComponent {


 public function ;
 username: string;
password: string;
router: any;
submit () {
 if (this.form.valid) {
  this.submitEM.emit(this.form.value);
}

 }
  constructor( ) {}

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
