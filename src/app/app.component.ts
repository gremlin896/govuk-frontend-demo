import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { initAll } from 'govuk-frontend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'govuk-frontend-demo';

  ngOnInit() {
    initAll();
  }
}
