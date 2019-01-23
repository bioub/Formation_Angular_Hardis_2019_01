import { Component, OnInit } from '@angular/core';
import { FakeContactService } from '../fake-contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'ab-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: FakeContactService) { }

  // équivalent à :
  // private contactService: FakeContactService;
  // constructor(contactService: FakeContactService) {
  //   this.contactService = contactService;
  // }

  ngOnInit() {
    this.contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

}
