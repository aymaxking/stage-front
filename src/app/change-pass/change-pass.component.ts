import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  pwChangeForm: any;
  newPW: any;
  confirm: any;
  err:any;

  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    if(!localStorage.getItem("isLogin"))
      this.router.navigateByUrl("")
  }

  validate(value: any) {
   if(value.mdp==localStorage.getItem("pass")){
     if(value.nmdp==value.nmdpc && value.nmdp!=""){
       localStorage.setItem("pass",value.nmdp)
       this.changepass(value.nmdp)
     }
     else{
       this.err=2
     }
   }else{
     this.err=1
   }
  }
  changepass(mdp:String){
    this.catService.changepass(this.catService.host+"/changemdp/"+localStorage.getItem("id")+"/"+mdp)
      .subscribe(data=>{
        this.router.navigateByUrl("")
      },err => {
        console.log(err);
      })
  }
}
