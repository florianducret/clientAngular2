import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bienvenue sur le super annuaire';
  people = [
    { firstName: "Misko", lastName: "Hevery", company: "Google" }
]
}

