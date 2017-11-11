import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GitHubService } from './github.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  styles:[`
    .img {
      position: relative;
      float: left;
      width: 100px;
      height: 100px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  `],
  template: `
    <ul>
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="GitHub">GitHub</a></li>
    </ul>
    <router-outlet></router-outlet>
    `,
  providers: []
})

export class AppComponent {

  constructor() {
  }
}
