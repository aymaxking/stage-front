import { Injectable } from '@angular/core';
import {Utilisateur} from '../models/utilisateur.model';
import {CatalogueService} from './catalogue.service';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class LoginService{
  user : any;
  islogin : any=true;
}

