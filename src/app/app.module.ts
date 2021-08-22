import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FeatureLoginComponent, FeatureLoginModule } from './feature-login';
import {
  FeatureBreadcrumbsDemoComponent,
  FeatureBreadcrumbsDemoModule,
} from './feature-breadcrumbs-demo';
import {
  FeatureSelectDemoComponent,
  FeatureSelectDemoModule,
} from './feature-select-demo';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component: FeatureLoginComponent },
      { path: 'breadcrumbs', component: FeatureBreadcrumbsDemoComponent },
      { path: 'select', component: FeatureSelectDemoComponent },
    ]),
    FeatureBreadcrumbsDemoModule,
    FeatureLoginModule,
    FeatureSelectDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
