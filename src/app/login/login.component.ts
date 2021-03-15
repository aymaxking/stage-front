import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Utilisateur} from '../models/utilisateur.model';
import {LoginService} from '../services/login.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: any;
  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router,private loginservice : LoginService) {}
  failed:boolean=false;


  ngOnInit(): void {
    if(localStorage.getItem("isLogin")=="true")
      if(localStorage.getItem("type")=="admin")
        this.router.navigateByUrl("/utilisateurs")
    else
      this.router.navigateByUrl("/personnes")
  }

  loginx(login:String,password:String){
    this.catService.getUserLogin(login,password)
      .subscribe((data:any)=> {
        let user =data._embedded.utilisateurs[0]
        console.log(user)
        if(typeof user!='undefined'){
          localStorage.setItem("type",user.type);
          localStorage.setItem("isLogin","true")
          localStorage.setItem("id",user.id)
          localStorage.setItem("pass",user.password)
          if (user.type == "admin") {
            this.router.navigateByUrl("/utilisateurs")
          }
        // @ts-ignore
        else if (user.type == "gestion") {
          this.router.navigateByUrl("/personnes")
        }
        // @ts-ignore
        else if (user.type == "consultation") {
          this.router.navigateByUrl("/personnes")
        }
        }
          else {
      this.failed=true;
    }
      },err => {
        console.log(err);
      })
  }

}
