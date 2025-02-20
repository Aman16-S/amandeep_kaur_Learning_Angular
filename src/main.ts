import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {personListComponent} from "./app/person-list/person-list.component";
import {personListComponent} from "./app/person-list/person-list.component";
import {ModifypersonComponent} from "./app/modify-person/modify-person.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo: '/persons', pathMatch: 'full'}, //default route
  { path: 'persons', component: personListComponent },
  { path: 'persons/:id', component: personListComponent },
  {path:'modify-person', component: ModifypersonComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
