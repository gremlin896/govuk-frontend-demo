import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-login',
  template: `
    <h1 class="govuk-heading-m">Login Form Demo</h1>

    <app-login-form (submitForm)="lastLogin = $event.username"></app-login-form>

    <h2 class="govuk-heading-s">Last Login Username:</h2>

    <div>{{ lastLogin }}</div>
  `,
  styles: [],
})
export class FeatureLoginComponent {
  // TODO: In a real feature, use the govuk grid system: https://design-system.service.gov.uk/styles/layout/#grid-system
  lastLogin: string = '';
}
