import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personnes-add',
  templateUrl: './personnes-add.component.html',
  styleUrls: ['./personnes-add.component.css']
})
export class PersonnesAddComponent implements OnInit {
  message: any;
  imgUrl: any;
  userfile:any;

  constructor(private catService:CatalogueService,private  router:Router) { }

  ngOnInit(): void {
  }

  onSavePersonne(value: any) {
   this.catService.savePersonne(this.catService.host+"/listPersonnes/1",value)
     .subscribe(res=>{
       this.router.navigateByUrl("/personnes");
     },err => {
       console.log(err);
     })
  }


  // onSelectFile(event: Event) {
  //   if(event.target.files.length>0){
  //      const file = event.target.files[0];
  //      this.userfile = file;
  //
  //      var mimeType = event.target.files[0].type;
  //      if(mimeType.match(/image\/*/)==null){
  //        this.message="Only images are supported";
  //        return;
  //      }
  //      var reader = new FileReader();
  //      //this.imagePath = file;
  //      reader.readAsDataURL(file);
  //      reader.onload=(_event) => {
  //        this.imgUrl=reader.result;
  //      }
  //   }
  // }
}
