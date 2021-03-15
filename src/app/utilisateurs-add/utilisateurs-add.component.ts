import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-utilisateurs-add',
  templateUrl: './utilisateurs-add.component.html',
  styleUrls: ['./utilisateurs-add.component.css']
})
export class UtilisateursAddComponent implements OnInit {

  constructor(private catService:CatalogueService,private  router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("isLogin"))
      this.router.navigateByUrl("")
    else{
      if(localStorage.getItem("type")!="admin")
        this.router.navigateByUrl("/personnes")
    }
  }
  onSaveUtilisateur(value: any) {
    this.catService.saveUtilisateur(this.catService.host+"/listUtilisateurs",value)
      .subscribe(res=>{
        this.router.navigateByUrl("/utilisateurs");
      },err => {
        console.log(err);
      })
  }
}
