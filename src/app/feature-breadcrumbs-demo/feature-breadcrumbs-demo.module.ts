import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBreadcrumbsDemoComponent } from './feature-breadcrumbs-demo.component';
import { BreadcrumbsModule } from '../components';

@NgModule({
  declarations: [FeatureBreadcrumbsDemoComponent],
  imports: [CommonModule, BreadcrumbsModule],
})
export class FeatureBreadcrumbsDemoModule {}
