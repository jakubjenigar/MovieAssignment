import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title: string;
  description: string;
  titleURL:string;
  genre:string;
  coverURL: string;

  post() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  constructor(private router: Router) {}

  form: FormGroup = new FormGroup ({
    title: new FormControl(''),
    description: new FormControl(''),
    titleURL: new FormControl(''),
    genre: new FormControl(''),
    coverURL: new FormControl('')
  });


  ngOnInit() {
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}

