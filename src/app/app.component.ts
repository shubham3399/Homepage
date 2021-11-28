import { Component } from '@angular/core';
import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ 
     fader
  ]
})


export class AppComponent {
  title = 'homepage';
  prepareRoute(outlet: RouterOutlet)
{
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}




