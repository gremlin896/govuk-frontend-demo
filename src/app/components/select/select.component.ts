import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { SelectOption } from '../../models/select-option.model';

@Component({
  selector: 'app-select',
  template: `
    <label class="govuk-label" *ngIf="label"> {{ label }} </label>
    <select class="govuk-select" (change)="onSelect($event.target)">
      <option [value]="option.value" *ngFor="let option of options">
        {{ option.label }}
      </option>
    </select>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  // TODO: Improve accessibility by adding for/id/name attributes as Inputs
  // TODO: Implement ControlValueAccessor, so this can be used as an angular form control

  @Input() label?: string;
  @Input() options: SelectOption[] = [];
  @Output() selected = new EventEmitter<SelectOption['value']>();

  onSelect(e: EventTarget | null) {
    if (!e) return;
    const select = e as HTMLSelectElement;
    this.selected.emit(select.value);
  }

  ngOnInit() {
    // this is a poor way of forcing the initial selected value to be emitted,
    // implementing CVA as mentioned above would be a better approach
    this.selected.emit(this.options[0].value);
  }
}
