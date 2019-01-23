import { Component, OnInit, Inject } from '@angular/core';
import { Contact } from '../contact';
import { Observable } from 'rxjs';
import { ContactServiceInterface, ContactService } from '../contact-service.interface';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ab-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // contacts: Contact[] = [];
  contacts$: Observable<Contact[]>;

  constructor(
    @Inject(ContactService) private contactService: ContactServiceInterface,
  ) { }

  // équivalent à :
  // private contactService: FakeContactService;
  // constructor(contactService: FakeContactService) {
  //   this.contactService = contactService;
  // }

  ngOnInit() {
    // idéalement il faudrait unsubscribe dans ngOnDestroy
    // this.contactService.getAll().subscribe((contacts) => {
    //   this.contacts = contacts;
    // });
    this.loadContacts();

    this.contactService.events.pipe(
      filter((event) => event === 'refresh-list'),
    ).subscribe(() => {
      this.loadContacts();
    });
  }

  loadContacts() {
    this.contacts$ = this.contactService.getAll();
  }

}
