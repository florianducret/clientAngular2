import { Component } from '@angular/core';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { AnnuaireService } from "./annuaire.service";
import { Contact } from './annuaire'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  detailedContact = null;

  constructor(private as: AnnuaireService) {
    this.as.contactDetailedEvent.subscribe(
      contact => this.detailedContact = contact
    )
  }


}

