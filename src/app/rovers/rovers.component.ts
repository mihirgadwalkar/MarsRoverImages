import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.css']
})
export class RoversComponent implements OnInit,OnDestroy {

  mySubscription:Subscription;
  rovers;
  constructor(private fsObj:ConsumeService,private router:Router) { }
  ngOnInit(): void {
    this.mySubscription= this.fsObj.getRoverData().subscribe(
      userData=>{
        this.rovers=userData;
        console.log(this.rovers)
       },
      err=>{
        console.log("err in getting data",err)
      }
    )
  }
  onSelectId(id){
    this.router.navigateByUrl('rovers/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}