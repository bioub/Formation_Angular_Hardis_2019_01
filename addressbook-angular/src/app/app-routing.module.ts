import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'contacts',
  loadChildren: './contacts/contacts.module#ContactsModule'
}, {
  path: '**',
  component: PageNotFoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
