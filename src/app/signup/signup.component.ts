import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PersonService } from '../services/person.service';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  person = {
    fullname: '',
    username: '',
    password: '',
    email: '',
    submited: false
  };

  form: FormGroup = new FormGroup ({
    fullname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  ngOnInit() {}
  constructor(
    private personService: PersonService,
    private router: Router,
    private snackBar: MatSnackBar) {}

  signup() {
    const data = {
      fullname: this.person.fullname,
      username: this.person.username,
      password: this.person.password,
      email: this.person.email
    };
    console.log(data);
    if (data.fullname !== '' && data.username !== ''
      && data.password !== '' && data.email !== ''
      ) {
        this.personService.create(data).subscribe(
          response => {
            console.log(response);
            this.person.submited = true;
            this.snackBar.open('Succesfully created account', 'Dismiss');
            this.router.navigate(['log_in']);
          },
          error => {
            console.log(error);
          }
          );
      } else {
        this.snackBar.open('Please fill out all the fields', 'Dismiss');
      }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
