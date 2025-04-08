import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PersonListComponent } from './app/person-list/person-list.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/persons', pathMatch: 'full' }, // Default route (Eagerly loaded)
  { path: 'persons', component: PersonListComponent },     // Eagerly loaded route for 'persons'

  // Lazy load the ModifyPersonComponent (as part of its own module, if it has one)
  {
    path: 'modify-person',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyPersonComponent)  // Lazy-loaded component
  },

  // Wildcard route for 404 handling
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).then(r => console.log('Bootstrap successful'));
