import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-sanction',
  templateUrl: './edit-sanction.component.html',
  styleUrls: ['./edit-sanction.component.css']
})
export class EditSanctionComponent implements OnInit {

  private idsanction: any;
  public sanction: any;
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
    this.idsanction=this.activatedRoute.snapshot.params.id;
    this.catService.getSanctionsId(this.idsanction)
      .subscribe(data=>{
        this.sanction=data;
      },err => {
        console.log(err);
      })
  }

  onEditSanction(value: any) {
    this.catService.editRessource(this.catService.host+"/listSanctions/"+this.idsanction+"/"+localStorage.getItem("id"),value)
      .subscribe(data=>{
        this.router.navigateByUrl("/sanction")
      },err => {
        console.log(err);
      })
  }
}
