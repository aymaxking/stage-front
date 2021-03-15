import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
  public personnes: any;
  idpersonne = '';
  public size:number=10;
  public currentPage:number=0;
  public totalPages: number=0;
  public pages: Array<number>=Array();
  type = localStorage.getItem("type")
  private trustedurl: any;



  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router,protected sanitizer: DomSanitizer) {
    this.activatedRoute.queryParams.subscribe(data=>{
        this.idpersonne=data.pid;
        if (this.idpersonne!=""){
          this.catService.getPersonnesbyId(this.idpersonne,this.currentPage,this.size)
            .subscribe(data=>{
              this.personnes=data;
              // @ts-ignore
              this.totalPages=data["page"].totalPages;
              this.pages=new Array<number>(this.totalPages);
              },err => {
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

  onGetPersonnes() {
    this.catService.getPersonnes(this.currentPage,this.size)
      .subscribe(data=>{
        this.personnes=data;
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);      },err => {
        console.log(err);
      })
  }


  atob(blob:string){
   return  this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;charset=utf-8;base64,'+blob)
  }

  onChercher(form: any) {
    this.catService.getPersonneBy(form.id,form.nom,form.prenom,form.cin,form.sexe,form.etatcivil,this.currentPage,this.size)
      .subscribe(data=>{
        this.personnes=data;
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        },err => {
        console.log(err);
      })
  }

  onUpdatePersonne(p: any) {
   this.router.navigateByUrl("modifierpersonne/"+p)
  }

  onDeletePersonne(p: any) {
    let conf=confirm("Etes vous sure?")
    if(conf) {
      this.catService.deletePersonne(p+"/"+localStorage.getItem("id"))
        .subscribe(data=>{
          this.personnes=data;
        },err => {
          console.log(err);
        })
    }
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl("")
  }
  onPage(i: number, value: any) {
    this.currentPage=i;
    this.onGetPersonnes()
  }
}
