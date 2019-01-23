import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeContactService {

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
}
