import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { AntecedentsComponent } from './antecedents/antecedents.component';
import { JournalComponent } from './journal/journal.component';
import {HttpClientModule} from '@angular/common/http';
import { SanctionComponent } from './sanction/sanction.component';
import {FormsModule} from '@angular/forms';
import { AnecedentsAddComponent } from './anecedents-add/anecedents-add.component';
import { PersonnesAddComponent } from './personnes-add/personnes-add.component';
import { UtilisateursAddComponent } from './utilisateurs-add/utilisateurs-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateursComponent,
    PersonnesComponent,
    AntecedentsComponent,
    JournalComponent
    , SanctionComponent, AnecedentsAddComponent, PersonnesAddComponent, UtilisateursAddComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule, HttpClientModule, FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
