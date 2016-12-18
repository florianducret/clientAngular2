/**
 * Created by Utilisateur on 18/12/2016.
 */
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from "../annuaire";
import {AnnuaireService} from "../annuaire.service";

@Component({
  selector: 'annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css'],
})
export class AnnuaireComponent implements OnInit {
  listContact: Contact[];

  constructor(private as: AnnuaireService) {
    this.as.contactAddedEvent.subscribe(
      result => this.getContacts()
    )
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() : void {
    this.as.getContacts().subscribe(contacts => this.listContact = contacts);
  }

  deleteContact(id: string) : void {
    this.as.deleteContact(id).subscribe(() => {
        let index = this.listContact.findIndex(c => c._id === id);
        this.listContact.splice(index, 1);
      }
    );
  }

  addExempleContacts() {
    this.as.addExempleContacts().subscribe(
      result => this.getContacts()
    )
  }

  displayTelNumber(contact: Contact) {
    this.as.contactDetailedEvent.emit(contact);
  }

}
