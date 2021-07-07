import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeService } from 'src/app/consume.service';
import { Subscription } from 'rxjs';
import { Rover } from 'src/app/models/rover.model';
@Component({
  selector: 'app-viewrover',
  templateUrl: './viewrover.component.html',
  styleUrls: ['./viewrover.component.css']
})
export class ViewroverComponent implements OnInit,OnDestroy {
 
    mySubscription:Subscription;
myPosts:Rover[]=[];
adminCameras
constructor(private csObj:ConsumeService,private router:Router) { }
ngOnInit(): void {
  this.mySubscription= this.csObj.getCamerasData().subscribe(
    roverData=>{
      this.adminCameras=roverData;
      console.log(this.adminCameras)
     },
    err=>{
      console.log("err in getting cameras data",err)
    }

  )
}
deleteCamera(cameraObj){
  console.log("camera to delete",cameraObj.name)
  this.csObj.deleteCamera(cameraObj.id).subscribe(
    res=>{
      //write getting latest data from API
      console.log("res is ",res);
      alert("Camera deleted")
    },
    err=>{
      console.log("err in delete camera",err)
    }
  )
}
ngOnDestroy(){
  this.mySubscription.unsubscribe();
}
}