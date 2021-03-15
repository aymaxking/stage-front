import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {
  private idpersonne: any;
  public personne: any;
  type = localStorage.getItem("type")

  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router) {

  }
  ngOnInit(): void {
    if(!localStorage.getItem("isLogin"))
      this.router.navigateByUrl("")
    else{
      if(localStorage.getItem("type")=="admin")
        this.router.navigateByUrl("/utilisateurs")
      else if(localStorage.getItem("type")=="consultation")
        this.router.navigateByUrl("/personnes")
    }
    this.idpersonne=this.activatedRoute.snapshot.params.id;
    this.catService.getPersonnesId(this.idpersonne)
      .subscribe(data=>{
        this.personne=data;
        console.log(this.personne);
      },err => {
        console.log(err);
      })

  }

  onEditPersonne(value: any) {
    this.catService.editRessource(this.catService.host+"/listPersonnes/"+this.idpersonne+"/"+localStorage.getItem("id"),value)
          .subscribe(data=>{
            this.router.navigateByUrl("/personnes")
          },err => {
            console.log(err);
          })
  }

}
