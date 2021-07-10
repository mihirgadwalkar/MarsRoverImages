import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeService } from 'src/app/consume.service';
import { Subscription } from 'rxjs';
import { Rover } from 'src/app/models/rover.model';
@Component({
  selector: 'app-viewpic',
  templateUrl: './viewpic.component.html',
  styleUrls: ['./viewpic.component.css']
})
export class ViewpicComponent implements OnInit {
  mySubscription:Subscription;
  myPosts:[]=[];
  adminPics;
  searchTerm:any;
  term:any;
  p=1;
  constructor(private csObj:ConsumeService,private router:Router) { }

  ngOnInit(): void {this.mySubscription= this.csObj.getPhotosData().subscribe(
    roverData=>{
      this.adminPics=roverData;
      console.log(this.adminPics)
     },
    err=>{
      console.log("err in getting photos data",err)
    }

  )
}
deletePhoto(photoObj){
  console.log("photo to delete",photoObj.name)
  this.csObj.deletePhoto(photoObj.id).subscribe(
    res=>{
      //write getting latest data from API
      console.log("res is ",res);
      alert("Photo deleted")
    },
    err=>{
      console.log("err in delete Photo",err)
    }
  )
}
ngOnDestroy(){
  this.mySubscription.unsubscribe();
}
  }
