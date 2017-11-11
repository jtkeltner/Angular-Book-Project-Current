import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	declarations: [
		LoginComponent
	],
	exports: [
	],
	providers: [
		LoginService,
		PreventUnsavedChangesGuard,
		AuthGuard
	]
})

export class LoginModule {
}