import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personnes-add',
  templateUrl: './personnes-add.component.html',
  styleUrls: ['./personnes-add.component.css']
})
export class PersonnesAddComponent implements OnInit {
  message: any;
  imgUrl: any;
  userfile:any
  type = localStorage.getItem("type")
  fe:any=".";
  uploadForm: FormGroup;



  constructor(private catService:CatalogueService,private  router:Router,protected sanitizer: DomSanitizer,public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })

  }

  ngOnInit(): void {
    if(!localStorage.getItem("isLogin"))
      this.router.navigateByUrl("")
    else{
      if(localStorage.getItem("type")=="admin")
        this.router.navigateByUrl("/utilisateurs")
      else if(localStorage.getItem("type")=="consultation")
        this.router.navigateByUrl("/personnes")
    }
  }


  onSavePersonne(value: any) {
   this.catService.savePersonne(this.catService.host+"/listPersonnes/"+localStorage.getItem("id")+"/"+this.fe,value)
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
  imgURL: any;
  imgName:any;
  receivedImageData: any;
  pic: any;
  json: any;
  convertedImage: any;


  showPreview(e:Event) {
    // @ts-ignore
    this.fe=e.target.files[0].name;
    // @ts-ignore
    const file = (e.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    // @ts-ignore
    this.uploadForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imgURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  onUpload() {

  }
}
