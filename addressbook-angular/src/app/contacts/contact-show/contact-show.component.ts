import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FakeContactService } from '../fake-contact.service';
import { Contact } from '../contact';
import { switchMap, map } from 'rxjs/operators';
import { ContactServiceInterface, ContactService } from '../contact-service.interface';

@Component({
  selector: 'ab-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.scss']
})
export class ContactShowComponent implements OnInit {

  contact: Contact;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(ContactService) private contactService: ContactServiceInterface,
  ) { }

  ngOnInit() {
    this.title.setTitle('La page show');
    // this.activatedRoute.params.subscribe((params) => {
    //   this.contactService.getById(params.id).subscribe((contact) => {
    //     this.contact = contact;
    //   });
    // });
    // |-------------{id: 2}---------------{id: 1}------{id: 2}----------
    // map((params) => params.id)
    // |-------------2------------1----------------------2----------
    // |----------------------------{name:'Michel'}--{name:'Jean'}--------{name:'Michel'}
    // switchMap((id) => this.contactService.getById(id)),
    // |---------------------------------------------{name:'Jean'}--------{name:'Michel'}
    this.activatedRoute.params.pipe(
      map((params) => params.id),
      switchMap((id) => this.contactService.getById(id)),
    ).subscribe((contact) => {
      this.contact = contact;
    });
  }

}
