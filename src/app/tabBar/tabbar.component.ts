import {Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tabBar',
  templateUrl: 'tabbar.component.html',
  styleUrls: ['tabbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabBarNav {

  constructor(private router: Router) {}
}