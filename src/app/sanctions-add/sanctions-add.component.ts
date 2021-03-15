import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sanctions-add',
  templateUrl: './sanctions-add.component.html',
  styleUrls: ['./sanctions-add.component.css']
})
export class SanctionsAddComponent implements OnInit {
  idantecedent = 0;
  optionValue: any;
  typeem: any;

  constructor(private catService:CatalogueService,private  router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data=>{
        this.idantecedent=data.aid;
      }
    )
  }

  ngOnInit(): void {
    if(!localStorage.getItem("isLogin"))
      this.router.navigateByUrl("")
    else{
      if(localStorage.getItem("type")!="gestion")
        this.router.navigateByUrl("/utilisateurs")
    }
  }
  //event handler for the select element's change event

  onSaveSanction(value: any) {
    // @ts-ignore
    this.catService.saveSanction(this.catService.host+"/listSanctions/"+localStorage.getItem("id")+"/"+this.idantecedent,value)
      .subscribe(res=>{
        this.router.navigateByUrl("/sanction");
      },err => {
        console.log(err);
      })
  }
}
