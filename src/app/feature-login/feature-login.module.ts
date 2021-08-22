import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLoginComponent } from './feature-login.component';
import { LoginFormModule } from '../components';

@NgModule({
  declarations: [FeatureLoginComponent],
  imports: [CommonModule, LoginFormModule],
})
export class FeatureLoginModule {}
