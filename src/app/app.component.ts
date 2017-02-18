import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> {{title }} </h1>
  <a [routerLink]="['']"> Dashboard</a>
  <a [routerLink]="['hero']"> Hero</a>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Hello Progreanmer!';
}
