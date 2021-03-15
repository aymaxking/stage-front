import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  public operations: any;
  public size:number=10;
  public currentPage:number=0;
  public totalPages: number=0;
  public pages: Array<number>=Array();

  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router) {
  }
  ngOnInit(): void {
    if(!localStorage.getItem("isLogin"))
      this.router.navigateByUrl("")
    else{
      if(localStorage.getItem("type")!="admin")
        this.router.navigateByUrl("/personnes")
    }
  }

  onGetOperations() {
    this.catService.getOperations(this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.operations=data;
      },err => {
        console.log(err);
      })
  }

  onChercher(form: any) {
    this.catService.getOperationBy(form.id,form.dho,form.type,form.etype,this.currentPage,this.size)
      .subscribe(data=>{
        this.operations=data;
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);         },err => {
        console.log(err);
      })
  }

  onUpdateOpeartion(o: any) {

  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl("")
  }


  onPage(i: number, value: any) {
    this.currentPage=i;
    this.onGetOperations()
  }
}
