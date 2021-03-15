import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.css']
})
export class EditUtilisateurComponent implements OnInit {
  private idutilisateur: any;
  public utlisateur: any;
  type = localStorage.getItem("type")

  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    if(!localStorage.getItem("isLogin"))
      this.router.navigateByUrl("")
    else{
      if(localStorage.getItem("type") !="admin")
        this.router.navigateByUrl("")
    }
    this.idutilisateur=this.activatedRoute.snapshot.params.id;
    this.catService.getUtilisateursId(this.idutilisateur)
      .subscribe(data=>{
        this.utlisateur=data;
        console.log(this.utlisateur);
      },err => {
        console.log(err);
      })
  }

  onEditUtilisateur(value: any) {
    this.catService.editRessource(this.catService.host+"/listUtilisateurs/"+this.idutilisateur,value)
      .subscribe(data=>{
        this.router.navigateByUrl("/utilisateurs")
      },err => {
        console.log(err);
      })
  }
}
