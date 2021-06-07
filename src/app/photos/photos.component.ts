import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data }  from '../models/data.model';
import { ConsumeService } from '../consume.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit,OnDestroy {

  mySubscription:Subscription;
  imglist:any;
  constructor(private fsObj:ConsumeService,private routeData:Router,private fullData:ActivatedRoute) { }
  ngOnInit(): void {
    let id=this.fullData.snapshot.params.id;
    console.log(id)
    this.mySubscription= this.fsObj.getRoversData(id).subscribe(
      photosData=>{
        this.imglist=photosData;
        console.log(this.imglist)
       },
      err=>{
        console.error("Error in getting data",err)
      }
    ) 
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
