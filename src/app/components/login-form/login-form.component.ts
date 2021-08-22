import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginForm } from '../../models';

@Component({
  selector: 'app-login-form',
  template: `
    <form
      class="govuk-form-group login-form"
      [formGroup]="form"
      (ngSubmit)="submitForm.emit(form.value)"
    >
      <label class="govuk-label" for="username"> Username </label>
      <input
        class="govuk-input"
        id="username"
        name="username"
        type="text"
        formControlName="username"
      />
      <label class="govuk-label" for="password"> Password </label>
      <input
        class="govuk-input"
        id="password"
        name="password"
        type="password"
        formControlName="password"
      />
      <div class="govuk-checkboxes" data-module="govuk-checkboxes">
        <div class="govuk-checkboxes__item">
          <input
            class="govuk-checkboxes__input"
            id="rememberme"
            name="rememberme"
            type="checkbox"
            aria-describedby="rememberme-item-hint"
            formControlName="rememberMe"
          />
          <label class="govuk-label govuk-checkboxes__label" for="rememberme">
            Remember me
          </label>
        </div>
      </div>
      <button class="govuk-button" data-module="govuk-button" type="submit">
        Login
      </button>
    </form>
  `,
  styles: [
    `
      .login-form {
        max-width: 300px;
      }

      .login-form > div,
      .login-form > label {
        padding: 10px 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  // TODO: Add validations, error states, success states, indication that login is in progress, etc

  form = this.fb.group({
    username: [],
    password: [],
    rememberMe: [false],
  });

  @Output() submitForm = new EventEmitter<LoginForm>();

  constructor(private fb: FormBuilder) {}
}
