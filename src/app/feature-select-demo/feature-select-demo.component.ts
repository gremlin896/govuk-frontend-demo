import { Component } from '@angular/core';
import { SelectOption } from '../models/select-option.model';

@Component({
  selector: 'app-feature-select-demo',
  template: `
    <app-select
      [options]="options"
      [label]="label"
      (selected)="selectedValue = $event"
    ></app-select>

    <h2 class="govuk-heading-s">Selected Value:</h2>

    <div>{{ selectedValue }}</div>
  `,
  styles: [],
})
export class FeatureSelectDemoComponent {
  // TODO: add buttons to allow switching between different configurations (similar to the breadcrumbs demo feature)

  options: SelectOption<string>[] = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
  ];
  label: string = 'Default Label';
  selectedValue = '';
}
