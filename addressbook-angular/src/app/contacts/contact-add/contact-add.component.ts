import { Component, OnInit, Inject } from '@angular/core';
import { Contact } from '../contact';
import { ContactServiceInterface, ContactService } from '../contact-service.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  contact = new Contact();

  constructor(
    @Inject(ContactService) private contactService: ContactServiceInterface,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createContact() {
    this.contactService.create(this.contact).subscribe(() => {
      this.router.navigate(['contacts']);
      this.contactService.events.emit('refresh-list');
    });
  }

}
