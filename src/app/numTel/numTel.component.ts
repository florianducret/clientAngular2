/**
 * Created by Utilisateur on 18/12/2016.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Contact} from "../annuaire";
import {AnnuaireService} from "../annuaire.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'numTel',
  templateUrl: './numTel.component.html',
  styleUrls: ['./numTel.component.css'],
})
export class NumTelComponent implements OnInit {
  @Input() detailedContact : Contact;

  constructor(private as: AnnuaireService) { }

  ngOnInit() {
  }

  returnToAnnuaire() {
    this.as.contactDetailedEvent.emit(null);
  }

}
