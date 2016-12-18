/**
 * Created by Utilisateur on 18/12/2016.
 */
import {Injectable, EventEmitter, Output} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Contact} from "./annuaire";

@Injectable()
export class AnnuaireService {
  constructor(private http: Http) { }

  detailedContact = null;
  @Output() contactEditedEvent = new EventEmitter<Contact>();
  @Output() contactAddedEvent = new EventEmitter<Contact>();
  @Output() contactDetailedEvent = new EventEmitter<Contact>();

  addContact(contact: Contact) : Observable<any> {
    return this.http.post('http://localhost:8080/annuaire', contact);
  }

  getContacts() : Observable<Contact[]> {
    return this.http.get('http://localhost:8080/annuaire').map(res => res.json() as Contact[]);
  }

  getContact(id: string) : Observable<Contact> {
    return this.http.get('http://localhost:8080/annuaire/' + id).map(res => res.json() as Contact);
  }

  deleteContact(id: string) : Observable<any> {
    return this.http.delete('http://localhost:8080/annuaire/' + id);
  }

  editContact(id: string, contact: Contact) : Observable<any> {
    return this.http.put('http://localhost:8080/annuaire/' + id, contact);
  }

  addExempleContacts() : Observable<any> {
    return this.http.post('http://localhost:8080/addData', '');
  }

}
