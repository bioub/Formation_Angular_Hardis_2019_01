import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactShowComponent } from './contact-show/contact-show.component';

const routes: Routes = [{
  path: '',
  component: ContactComponent,
  // canActivate: [ExampleGuard],
  children: [{
    path: 'add',
    component: ContactAddComponent,
  }, {
    path: ':id',
    component: ContactShowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
