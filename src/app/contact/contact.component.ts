import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';


/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {

  constructor(private router: Router) {}
}