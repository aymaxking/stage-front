import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { AntecedentsComponent } from './antecedents/antecedents.component';
import { JournalComponent } from './journal/journal.component';
import {HttpClientModule} from '@angular/common/http';
import { SanctionComponent } from './sanction/sanction.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AnecedentsAddComponent } from './anecedents-add/anecedents-add.component';
import { PersonnesAddComponent } from './personnes-add/personnes-add.component';
import { UtilisateursAddComponent } from './utilisateurs-add/utilisateurs-add.component';
import { LoginComponent } from './login/login.component';
import { SanctionsAddComponent } from './sanctions-add/sanctions-add.component';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';
import { EditUtilisateurComponent } from './edit-utilisateur/edit-utilisateur.component';
import { EditAntecedentComponent } from './edit-antecedent/edit-antecedent.component';
import { EditSanctionComponent } from './edit-sanction/edit-sanction.component';
import {LoginService} from './services/login.service';
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateursComponent,
    PersonnesComponent,
    AntecedentsComponent,
    JournalComponent
    , SanctionComponent, AnecedentsAddComponent, PersonnesAddComponent, UtilisateursAddComponent, LoginComponent, SanctionsAddComponent, EditPersonneComponent, EditUtilisateurComponent, EditAntecedentComponent, EditSanctionComponent, ChangePassComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
    ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
