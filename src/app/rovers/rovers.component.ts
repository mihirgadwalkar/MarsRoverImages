import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.css']
})
export class RoversComponent implements OnInit, OnDestroy {

  mySubscription:Subscription;
  rovers:any;
  constructor(private dataObj:ConsumeService,private routeData:Router) { }

  ngOnInit(): void {
    this.mySubscription=this.dataObj.getData().subscribe(
      data=>{
        this.rovers=data;
        //console.log(this.rovers)
      },
      err=>{
        console.error("Error in getting Rovers Data",err)
      }
    )
  }

  getCameraFullData(id){
    this.routeData.navigateByUrl('cameras/'+id)
  }

  getPhotosFullData(id){
    this.routeData.navigateByUrl('photos/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}