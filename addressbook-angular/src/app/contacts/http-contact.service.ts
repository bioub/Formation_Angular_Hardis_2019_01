import { Injectable } from '@angular/core';
import { ContactServiceInterface } from './contact-service.interface';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(/*{
  providedIn: 'root',
}*/)
export class HttpContactService implements ContactServiceInterface {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${environment.apiBaseUrl}/users`);
  }

  getById(id: string | number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${environment.apiBaseUrl}/users/${id}`);
  }

  create(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(`${environment.apiBaseUrl}/users`, contact);
  }

}
