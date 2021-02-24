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

  constructor(private catService:CatalogueService,private  router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data=>{
        this.idpersonne=data.pid;
      }
    )
  }

  ngOnInit(): void {
  }

  onSaveAntecedent(value: any) {
    this.catService.saveAntecedent(this.catService.host+"/listAntecedents/1/"+this.idpersonne,value)
      .subscribe(res=>{
        this.router.navigateByUrl("/antecedents");
      },err => {
        console.log(err);
      })
  }
}
