import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // <--- CHANGED: App to AppComponent

bootstrapApplication(AppComponent, appConfig) // <--- CHANGED: App to AppComponent
  .catch((err) => console.error(err));