import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { FakeContactService } from './fake-contact.service';
import { HttpContactService } from './http-contact.service';
import { ContactService } from './contact-service.interface';


@NgModule({
  declarations: [
    ContactComponent,
    ContactAddComponent,
    ContactShowComponent,
  ],
  providers: [
    // {provide: FakeContactService, useClass: FakeContactService},
    // {provide: HttpContactService, useClass: HttpContactService},
    FakeContactService,
    HttpContactService,
    {provide: ContactService, useExisting: HttpContactService},
  ],
  imports: [
    SharedModule,
    ContactsRoutingModule,
  ]
})
export class ContactsModule { }
