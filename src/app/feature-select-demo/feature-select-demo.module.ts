import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSelectDemoComponent } from './feature-select-demo.component';
import { SelectModule } from '../components';

@NgModule({
  declarations: [FeatureSelectDemoComponent],
  imports: [CommonModule, SelectModule],
})
export class FeatureSelectDemoModule {}
