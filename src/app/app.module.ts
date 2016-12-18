import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { AnnuaireService } from './annuaire.service';
import { NumTelComponent } from './numTel/numTel.component'

@NgModule({
  declarations: [
    AppComponent,
    AnnuaireComponent,
    NumTelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AnnuaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
