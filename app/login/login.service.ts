import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginService {
	isLoggedIn = false;

	constructor(){
	}
		
	login(username,password){
	
		if (username === "jason" && password === "123")
			this.isLoggedIn = true;
		else
			this.isLoggedIn = false;
		console.log(this.isLoggedIn);
		return this.isLoggedIn;
	}
	
	logout(){
		this.isLoggedIn = false;
		return this.isLoggedIn;
	}
}