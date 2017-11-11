import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubComponent } from './github.component';
import { AboutMeComponent } from './aboutme.component';

export const routing = RouterModule.forRoot([
	{path: '', component: HomeComponent},
	{path: 'GitHub', component: GitHubComponent},
	{path: 'AboutMe', component: AboutMeComponent},
	{path: '**', component: NotFoundComponent}
])