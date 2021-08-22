import { Component, OnInit } from '@angular/core';
import { BreadcrumbsPath } from '../models';

@Component({
  selector: 'app-feature-breadcrumbs-demo',
  template: `
    <h1 class="govuk-heading-m">Breadcrumbs Demo</h1>

    <app-breadcrumbs [path]="path"></app-breadcrumbs>

    <div>
      <button
        class="govuk-button"
        data-module="govuk-button"
        type="button"
        (click)="
          setPath([
            { label: 'Home' },
            { label: 'About Us' },
            { label: 'Meet The Team' }
          ])
        "
      >
        Example 1
      </button>
      <button
        class="govuk-button"
        data-module="govuk-button"
        type="button"
        (click)="
          setPath([
            { label: 'This' },
            { label: 'Is' },
            { label: 'A' },
            { label: 'Deeply' },
            { label: 'Nested' },
            { label: 'Page' }
          ])
        "
      >
        Example 2
      </button>
      <button
        class="govuk-button"
        data-module="govuk-button"
        type="button"
        (click)="setPath([{ label: 'Home' }])"
      >
        Example 3
      </button>
    </div>
  `,
  styles: [],
})
export class FeatureBreadcrumbsDemoComponent implements OnInit {
  path: BreadcrumbsPath[] = [{ label: 'Home' }];

  constructor() {}

  ngOnInit(): void {}

  setPath(path: BreadcrumbsPath[]) {
    this.path = path;
  }
}
