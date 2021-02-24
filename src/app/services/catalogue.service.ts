import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:String="http://localhost:8080";


  constructor(private httpClient:HttpClient) { }




  public getAntecedentsBy(id:string,dc:string,crime:string,da:string,page:number,size:number){
      if(id==""||id==null)
      return this.httpClient.get(this.host+"/antecedents/search/by?datecri="+dc+"&crime="+crime+"&dateant="+da+"&page="+page+"$size="+size)
    return this.httpClient.get(this.host+"/antecedents/search/byId?mc="+id+"&page="+page+"$size="+size)
  }
  public getAntecedentsByPersonne(id:string,page:number,size:number){
    return this.httpClient.get(this.host+"/antecedents/search/byPid?mc="+id+"&page="+page+"$size="+size)
  }
  public getOperationBy(id:string,date:string,type:string,etype:string,page:number,size:number){
    if(id==""||id==null)
      return this.httpClient.get(this.host+"/operations/search/by?date="+date+"&type="+type+"&etype="+etype+"&page="+page+"$size="+size)
    return this.httpClient.get(this.host+"/operations/search/byId?mc="+id+"&page="+page+"$size="+size)
  }
  public getUtilisateurBy(id:string,type:string,matricule:string,page:number,size:number){
    if(id==""||id==null)
      return this.httpClient.get(this.host+"/utilisateurs/search/by?type="+type+"&matricule="+matricule+"&page="+page+"$size="+size)
    return this.httpClient.get(this.host+"/utilisateurs/search/byId?mc="+id+"&page="+page+"$size="+size)
  }
  public getPersonneBy(id:string,nom:string,prenom:string,cin:string,sexe:string,etatcivil:string,page:number,size:number){
    if(id==""||id==null)
      return this.httpClient.get(this.host+"/personnes/search/by?nom="+nom+"&prenom="+prenom+"&cin="+cin+"&sexe="+sexe+"&etat="+etatcivil+"&page="+page+"$size="+size)
    return this.httpClient.get(this.host+"/personnes/search/byId?mc="+id+"&page="+page+"$size="+size)
  }
  public getSanctionBy(id:string,genre:string,nombre:string,page:number,size:number){
    if(nombre==null) nombre=""
      if(id==""||id==null)
      return this.httpClient.get(this.host+"/sanctions/search/by?genre="+genre+"&nombre="+nombre+"&page="+page+"$size="+size)
    return this.httpClient.get(this.host+"/sanctions/search/byId?mc="+id+"&page="+page+"$size="+size)
  }
  public getAntecedents(page:number,size:number){

    return this.httpClient.get(this.host+"/antecedents?page="+page+"&size="+size);
  }
  public getOperations(page:number,size:number){
    return this.httpClient.get(this.host+"/operations?page="+page+"$size="+size)
  }
  public getPersonnes(page:number,size:number){
    return this.httpClient.get(this.host+"/personnes?page="+page+"&size="+size);
  }
  public getUtilisateurs(page:number,size:number){
    return this.httpClient.get(this.host+"/utilisateurs?page="+page+"&size="+size);
  }
  public getSanctions(page:number,size:number){
    return this.httpClient.get(this.host+"/sanctions?page="+page+"&size="+size);
  }

  public getSanctionsbyAid(id:String,page:number,size:number){
    return this.httpClient.get(this.host+"/sanctions/search/byAid?mc="+id+"&page="+page+"$size="+size)
  }

  public getPersonnesbyId(id:String,page:number,size:number){
    return this.httpClient.get(this.host+"/personnes/search/byId?mc="+id+"&page="+page+"$size="+size)
  }

  public getAntecedentsById(id: string,page:number,size:number){
    return this.httpClient.get(this.host+"/antecedents/search/byId?mc="+id+"&page="+page+"$size="+size)
  }


  public getUtilisateursById(id: string,page:number,size:number){
    return this.httpClient.get(this.host+"/utilisateurs/search/byId?mc="+id+"&page="+page+"$size="+size)
  }
  public getSanctionsById(id: string,page:number,size:number){
    return this.httpClient.get(this.host+"/sanctions/search/byId?mc="+id+"&page="+page+"$size="+size)
  }


  public deleteAntecedent(url:String){
    // @ts-ignore
    return this.httpClient.delete(this.host+"/listAntecedents/"+url);
  }
  public deleteOperation(url:String){
    // @ts-ignore
    return this.httpClient.delete(url);
  }
  public deletePersonne(url:String){
    // @ts-ignore
    return this.httpClient.delete(this.host+"/listPersonnes/"+url);
  }
  public deleteSanction(url:String){
    // @ts-ignore
    return this.httpClient.delete(url);
  }
  public deleteUtilisateur(url:String){
    // @ts-ignore
    return this.httpClient.delete(url);
  }


  public saveAntecedent(url:String,data:any){
    // @ts-ignore
    return this.httpClient.post(url,data);
  }
  public saveOperation(url:String,data:any){
    // @ts-ignore
    return this.httpClient.post(url,data);
  }
  public savePersonne(url:String,data:any){
    // @ts-ignore
    return this.httpClient.post(url,data);
  }
  public saveSanction(url:String,data:any){
    // @ts-ignore
    return this.httpClient.post(url,data);
  }
  public saveUtilisateur(url:String,data:any){
    // @ts-ignore
    return this.httpClient.post(url,data);
  }

}
