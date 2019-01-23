import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ContactServiceInterface } from './contact-service.interface';

@Injectable(/*{
  providedIn: 'root',
}*/)
export class FakeContactService implements ContactServiceInterface {

  events = new EventEmitter<string>();

  protected contacts: Contact[] = [
    {
      id: 1,
      name: 'Jean Dupont',
    },
    {
      id: 2,
      name: 'Michel Martin',
    },
  ];

  getAll(): Observable<Contact[]> {
    // return new Observable((observer) => {
    //   observer.next(this.contacts);
    // });

    return of(this.contacts).pipe(
      delay(1000),
    );
  }

  getById(id: string | number): Observable<Contact> {
    const contact = this.contacts.find((c) => c.id === Number(id));

    return of(contact).pipe(
      delay(Number(id) === 1 ? 100 : 2000),
    );
  }

  create(contact: Contact): Observable<Contact> {
    throw new Error('Method not implemented.');
  }
}
