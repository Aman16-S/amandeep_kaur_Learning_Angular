import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';

// Define routes (we will add components later)
const routes: Routes = [];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Setting up the router
})
  .catch(err => console.error(err));
