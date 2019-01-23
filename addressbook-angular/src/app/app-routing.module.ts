import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactAddComponent } from './contacts/contact-add/contact-add.component';

const routes: Routes = [{
  path: 'contacts',
  component: ContactComponent,
}, {
  path: 'contacts-add',
  component: ContactAddComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
