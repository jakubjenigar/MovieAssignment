import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {

  constructor(private router: Router) {}
}