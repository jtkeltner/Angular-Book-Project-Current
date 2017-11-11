import { Component } from '@angular/core';

@Component({
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
		<h1>About Me</h1>
	  	<div class="media-left">
		<a href="#">
		  <img class="media-object img" src="./assets/images/profile.jpg" alt="...">
		</a>
		</div>
		<div class="media-body">
		  <h4 class="media-heading">Firstname Lastname</h4>
		  {{ aboutMeText }}
		</div>
	`
})

export class AboutMeComponent {
	aboutMeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}