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
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" routerLink="">ng-Project</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a routerLink="" routerLinkActivate="active">Home</a></li>
          <li><a routerLink="GitHub" routerLinkActive="active">GitHub</a></li>
          <li><a routerLink="AboutMe" routerLinkActive="active">About Me</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>
    <router-outlet></router-outlet>
    `,
  providers: []
})

export class AppComponent {

  constructor() {
  }
}
