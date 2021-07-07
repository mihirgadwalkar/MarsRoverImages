import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/consume.service';
import { Router } from '@angular/router';
import { PhotoObj } from 'src/app/models/photoObj.model';
@Component({
  selector: 'app-addpic',
  templateUrl: './addpic.component.html',
  styleUrls: ['./addpic.component.css']
})
export class AddpicComponent implements OnInit {

  constructor(private csObj:ConsumeService,private router:Router) { }

  ngOnInit(): void {
  }
  photoModel=new PhotoObj(0,0,'','',0,'','')
  onSubmitNewPhoto(){
    
    this.csObj.createNewPhoto(this.photoModel).subscribe(
      res=>{
        //navigate to viewrovers component
        this.router.navigateByUrl("admin/getpic/viewpics")

      },
      err=>{
        console.log('err in creating new photo',err)
      }
    )
}
}
