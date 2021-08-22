import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BreadcrumbsPath } from '../../models';

@Component({
  selector: 'app-breadcrumbs',
  template: `
    <div class="govuk-breadcrumbs">
      <ol class="govuk-breadcrumbs__list">
        <li class="govuk-breadcrumbs__list-item" *ngFor="let pathItem of path">
          <a
            class="govuk-breadcrumbs__link"
            [routerLink]="pathItem.routerLink"
            >{{ pathItem.label }}</a
          >
        </li>
      </ol>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  // TODO: if the current crumb is the active route, this should be indicated via some style

  @Input() path: BreadcrumbsPath[] = [];
}
