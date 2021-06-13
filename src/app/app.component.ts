import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  header = 'Project New';
  slideIndex = 1;
  ngAfterViewInit() {}

  constructor() {}
}
