import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.css']
})
export class SanctionComponent implements OnInit {

  public sanctions: any;
  idantecedent = '';
  idsanction = '';
  public size:number=10;
  public currentPage:number=0;
  public totalPages: number=0;
  public pages: Array<number>=Array();

  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data=>{
        this.idantecedent=data.aid;
      this.idsanction=data.sid;
      if (this.idantecedent!=""||this.idantecedent!=null){
          this.catService.getSanctionsbyAid(this.idantecedent,this.currentPage,this.size)
            .subscribe(data=>{
              // @ts-ignore
              this.totalPages=data["page"].totalPages;
              this.pages=new Array<number>(this.totalPages);
                this.sanctions=data;
              },
                err => {
              console.log(err);
            })
        }
      if (this.idsanction!=""){
        this.catService.getSanctionsById(this.idsanction,this.currentPage,this.size)
          .subscribe(data=>{
            this.sanctions=data;
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

  }


  onChercher(form: any) {
    this.catService.getSanctionBy(form.id,form.genre,form.nombre,this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.sanctions=data;
      },err => {
        console.log(err);
      })
  }

  onUpdateSanction(s: any) {

  }

  onDeleteSanction(s: any) {
    let conf=confirm("Etes vous sure?")
    if(conf) {
      this.catService.deleteSanction(s._links.self.href)
        .subscribe(data=>{
          this.sanctions=data;
        },err => {
          console.log(err);
        })
    }
  }

  onGetSanctions() {
    this.catService.getSanctions(this.currentPage,this.size)
      .subscribe(data=>{
        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.sanctions=data;
      },err => {
        console.log(err);
      })
  }
  onPage(i: number, value: any) {
    this.currentPage=i;
    this.onGetSanctions();
  }
}
