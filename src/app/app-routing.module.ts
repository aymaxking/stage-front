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
    path: "",redirectTo:"/journal",pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
