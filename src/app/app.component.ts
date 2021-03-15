import { Component } from '@angular/core';
import {Utilisateur} from './models/utilisateur.model';
import {LoginService} from './services/login.service';
import {CatalogueService} from './services/catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private catService:CatalogueService,private activatedRoute:ActivatedRoute,private router:Router) {

  }
  type = localStorage.getItem('type');
  login = localStorage.getItem('isLogin');

  logout() {
    localStorage.clear()
    this.type=null;
    this.login=null;
    this.router.navigateByUrl("")
  }
}
