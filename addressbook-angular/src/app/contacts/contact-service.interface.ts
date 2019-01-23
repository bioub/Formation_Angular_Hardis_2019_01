import { Observable } from 'rxjs';
import { Contact } from './contact';
import { InjectionToken, EventEmitter } from '@angular/core';

export const ContactService = new InjectionToken<ContactServiceInterface>('ContactService');

export interface ContactServiceInterface {
  events: EventEmitter<String>;
  getAll(): Observable<Contact[]>;
  getById(id: number | string): Observable<Contact>;
  create(contact: Contact): Observable<Contact>;
}
