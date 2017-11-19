import { Component } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-test';
  activeSystem = '';
  number;
  isCalled = false;
  systems = [
    'NodeJS',
    'Java/Spring'
  ];
  numbers = [
    5, 10, 20
  ]

  test(system, number) {
    if(!this.isCalled) { this.isCalled = true }
    this.activeSystem = system;
    this.number = number;
  }
}
