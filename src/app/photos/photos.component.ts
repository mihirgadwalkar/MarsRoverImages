import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
  photos;
constructor(private fsObj:ConsumeService,private router:Router) { }
ngOnInit(): void {
    this.mySubscription= this.fsObj.getData().subscribe(
      userData=>{
        this.photos=userData;
        console.log(this.photos)
       },
      err=>{
        console.log("err in getting data",err)
      }

    )
  }
  onSelectId(id){
    console.log(id)
    this.router.navigateByUrl('photos/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
