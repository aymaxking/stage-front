import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-antecedents',
  templateUrl: './antecedents.component.html',
  styleUrls: ['./antecedents.component.css']
})
export class AntecedentsComponent implements OnInit {

  public antecedents:any;
  idpersonne = '';
  idantecedent = '';
  iduser: string | null = '';
  type = localStorage.getItem("type")
  public size:number=10;
  public currentPage:number=0;
  public totalPages: number=5;
  public pages: Array<number>=Array();

  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router) {
   this.activatedRoute.queryParams.subscribe(data=>{
     this.idpersonne=data.pid;
     this.idantecedent=data.aid;
     if (this.idpersonne!=""){
       this.catService.getAntecedentsByPersonne(this.idpersonne,this.currentPage,this.size)
         .subscribe(data=>{
           this.antecedents=data;
           // @ts-ignore
           this.totalPages=data["page"].totalPages;
           this.pages=new Array<number>(this.totalPages);
           },err => {
           console.log(err);
         })
     }
     if (this.idantecedent!=""){
       this.catService.getAntecedentsById(this.idantecedent,this.currentPage,this.size)
         .subscribe(data=>{
           this.antecedents=data;
           // @ts-ignore
           this.totalPages=data["page"].totalPages;
           this.pages=new Array<number>(this.totalPages);         },err => {
           console.log(err);
         })
     }

     }
   )
  }



  ngOnInit(): void {
    if(!localStorage.getItem("isLogin"))
      this.router.navigateByUrl("")

  }

  onGetAntecedents() {
    this.catService.getAntecedents(this.currentPage,this.size)
      .subscribe(data=>{
        this.antecedents=data;
      },err => {
        console.log(err);
      })
  }

  onDeleteAntecedent(a:any) {
    let conf=confirm("Etes vous sure?")
    if(conf) {
      this.catService.deleteAntecedent(a+"/"+localStorage.getItem("id"))
        .subscribe(data=>{
          this.antecedents=data;
        },err => {
          console.log(err);
        })
    }
  }

  onChercher(form:any) {
    this.catService.getAntecedentsBy(form.id,form.dhc,form.crime,form.dha,this.currentPage,this.size)
      .subscribe(data=>{
        this.antecedents=data;
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
      },err => {
        console.log(err);
      })
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl("")
  }

  onUpdateAntecedent(a: any) {
    this.router.navigateByUrl("modifierantecedent/"+a)
  }

  onPage(i: number, value: any) {
    this.currentPage=i;
    this.onGetAntecedents()
  }
}
