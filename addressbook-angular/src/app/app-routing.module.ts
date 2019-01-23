import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactAddComponent } from './contacts/contact-add/contact-add.component';
import { ContactShowComponent } from './contacts/contact-show/contact-show.component';

const routes: Routes = [{
  path: 'contacts',
  component: ContactComponent,
  children: [{
    path: 'add',
    component: ContactAddComponent,
  }, {
    path: ':id',
    component: ContactShowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
