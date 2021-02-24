import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sanctions-add',
  templateUrl: './sanctions-add.component.html',
  styleUrls: ['./sanctions-add.component.css']
})
export class SanctionsAddComponent implements OnInit {
  idantecedent = 0;


  constructor(private catService:CatalogueService,private  router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data=>{
        this.idantecedent=data.aid;
      }
    )
  }

  ngOnInit(): void {
  }

  onSaveSanction(value: any) {
    this.catService.saveSanction(this.catService.host+"/listSanctions/1/"+this.idantecedent,value)
      .subscribe(res=>{
        this.router.navigateByUrl("/sanction");
      },err => {
        console.log(err);
      })
  }
}
