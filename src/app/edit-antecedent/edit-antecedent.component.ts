import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-antecedent',
  templateUrl: './edit-antecedent.component.html',
  styleUrls: ['./edit-antecedent.component.css']
})
export class EditAntecedentComponent implements OnInit {

  private idantecedent: any;
  public antecedent: any;
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
    this.idantecedent=this.activatedRoute.snapshot.params.id;
    this.catService.getAntecdentsId(this.idantecedent)
      .subscribe(data=>{
        this.antecedent=data;
      },err => {
        console.log(err);
      })
  }
  onEditAntecedent(value: any) {
    this.catService.editRessource(this.catService.host+"/listAntecdents/"+this.idantecedent+"/"+localStorage.getItem("id"),value)
      .subscribe(data=>{
        this.router.navigateByUrl("/antecdents")
      },err => {
        console.log(err);
      })
  }



}
