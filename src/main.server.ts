import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // <--- CHANGED: App to AppComponent
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config); // <--- CHANGED: App to AppComponent

export default bootstrap;