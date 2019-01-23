import { Observable } from 'rxjs';
import { Contact } from './contact';
import { InjectionToken } from '@angular/core';

export const ContactService = new InjectionToken<ContactServiceInterface>('ContactService');

export interface ContactServiceInterface {
  getAll(): Observable<Contact[]>;
  getById(id: number | string): Observable<Contact>;
  create(contact: Contact): Observable<Contact>;
}
