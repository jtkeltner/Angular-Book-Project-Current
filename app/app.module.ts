import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { AboutMeComponent } from './aboutme.component';

import { routing } from './app.routing';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

import { GitHubModule } from './github/github.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutMeComponent,
    GitHubComponent,
    GitHubUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    GitHubModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }