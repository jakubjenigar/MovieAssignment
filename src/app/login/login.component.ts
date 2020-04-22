import { MatSnackBar } from '@angular/material';
import { PersonService } from './../services/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'loginForm',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
  currentUser = null;
  message = '';
  person = {
    username: '',
    password: '',
  };

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // this.personService.loginCheck(this.route.snapshot.params.get('username'), ('password'));
  }

  login() {
    {
      this.personService
        .loginCheck(this.person.username, this.person.password)
        .subscribe(
          (response) => {
            console.log(response);
            if (response !== null) {
              this.router.navigate(['browse']);
            } else {
              this.snackBar.open('Wrong username or password :/', 'Dismiss');
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
