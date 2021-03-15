import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UtilisateursComponent} from './utilisateurs/utilisateurs.component';
import {PersonnesComponent} from './personnes/personnes.component';
import {AntecedentsComponent} from './antecedents/antecedents.component';
import {JournalComponent} from './journal/journal.component';
import {SanctionComponent} from './sanction/sanction.component';
import {PersonnesAddComponent} from './personnes-add/personnes-add.component';
import {UtilisateursAddComponent} from './utilisateurs-add/utilisateurs-add.component';
import {AnecedentsAddComponent} from './anecedents-add/anecedents-add.component';
import {LoginComponent} from './login/login.component';
import {SanctionsAddComponent} from './sanctions-add/sanctions-add.component';
import {EditPersonneComponent} from './edit-personne/edit-personne.component';
import {EditSanctionComponent} from './edit-sanction/edit-sanction.component';
import {EditAntecedentComponent} from './edit-antecedent/edit-antecedent.component';
import {EditUtilisateurComponent} from './edit-utilisateur/edit-utilisateur.component';
import {ChangePassComponent} from './change-pass/change-pass.component';

const routes: Routes = [
  {
   path: "utilisateurs",component:UtilisateursComponent
  },
  {
    path: "personnes",component:PersonnesComponent
  },
  {
    path: "antecedents",component:AntecedentsComponent
  },
  {
    path: "journal",component:JournalComponent
  },
  {
    path: "sanction",component:SanctionComponent
  },
  {
    path: "ajouterpersonne",component:PersonnesAddComponent
  },
  {
    path: "ajouterutilisateur",component:UtilisateursAddComponent
  },
  {
    path: "ajouterantecedent",component:AnecedentsAddComponent
  },
  {
    path: "ajoutersanction",component:SanctionsAddComponent
  },
  {
    path: "modifierpersonne/:id",component:EditPersonneComponent
  },
  {
    path: "modifierutilisateur/:id",component:EditUtilisateurComponent
  },
  {
    path: "modifierantecedent/:id",component:EditAntecedentComponent
  },
  {
    path: "modifiersanction/:id",component:EditSanctionComponent
  },
  {
    path: "changermdp",component:ChangePassComponent
  },
  {
    path: "",component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
