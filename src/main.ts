import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import {PersonListComponent} from './app/person-list/person-list.component';
import {ModifyPersonComponent} from './app/modify-list-item/modify-list-item.component';
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo: '/persons', pathMatch: 'full'}, //default route
  { path: 'persons', component: PersonListComponent  },
  { path: 'persons/:id', component: ModifyPersonComponent  },
  {path:'modify-person', component: ModifyPersonComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
