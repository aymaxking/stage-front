import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  utilisateurs:any;
  idutilisateur = "";
  public size:number=10;
  public currentPage:number=0;
  public totalPages: number=0;
  public pages: Array<number>=Array();

  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.activatedRoute.queryParams.subscribe(data=> {
      this.idutilisateur = data.uid;
      if (this.idutilisateur != ""||this.idutilisateur!=null) {
        this.catService.getUtilisateursById(this.idutilisateur,this.currentPage,this.size)
          .subscribe(data => {
            this.utilisateurs = data;
            // @ts-ignore
            this.totalPages=data["page"].totalPages;
            this.pages=new Array<number>(this.totalPages);
          }, err => {
            console.log(err);
          })
      }
    })
  }


    ngOnInit(): void {
        if(!localStorage.getItem("isLogin"))
            this.router.navigateByUrl("")
        else{
            if(localStorage.getItem("type")!="admin")
                this.router.navigateByUrl("/personnes")
        }
    }

  onGetUtilisateurs() {
    this.catService.getUtilisateurs(this.currentPage, this.size)
      .subscribe(data=>{
        this.utilisateurs=data;
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);      },err => {
        console.log(err);
      })
  }

  onChercher(form: any) {
    this.catService.getUtilisateurBy(form.id,form.type,form.matricule,this.currentPage,this.size)
      .subscribe(data=>{
        this.utilisateurs=data;
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);      },err => {
        console.log(err);
      })
  }

  onUpdateUtilisateur(u: any) {
    this.router.navigateByUrl("modifierutilisateur/"+u)
  }

  onDeleteUtilisateur(u: any) {
    let conf=confirm("Etes vous sure?")
    if(conf) {
      this.catService.deleteUtilisateur(u)
        .subscribe(data=>{
          this.utilisateurs=data;
        },err => {
          console.log(err);
        })
    }
  }
  onPage(i: number, value: any) {
    this.currentPage=i;
    this.onGetUtilisateurs()
  }



    logout() {
        localStorage.clear()
        this.router.navigateByUrl("")
    }
}
