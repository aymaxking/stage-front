import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-anecedents-add',
  templateUrl: './anecedents-add.component.html',
  styleUrls: ['./anecedents-add.component.css']
})
export class AnecedentsAddComponent implements OnInit {
  idpersonne = 0;
  type = localStorage.getItem("type")

  constructor(private catService:CatalogueService,private  router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data=>{
        this.idpersonne=data.pid;
      }
    )
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
  }

  onSaveAntecedent(value: any) {
    this.catService.saveAntecedent(this.catService.host+"/listAntecedents/"+localStorage.getItem("id")+"/"+this.idpersonne,value)
      .subscribe(res=>{
        this.router.navigateByUrl("/antecedents");
      },err => {
        console.log(err);
      })
  }
}
