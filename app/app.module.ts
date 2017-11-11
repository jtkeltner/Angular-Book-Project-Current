import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { AboutMeComponent } from './aboutme.component';

import { GitHubModule } from './github/github.module';
import { LoginModule } from './login/login.module';

import { routing } from './app.routing';
import { GitHubRouting } from './github/github.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    GitHubModule,
    GitHubRouting,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }