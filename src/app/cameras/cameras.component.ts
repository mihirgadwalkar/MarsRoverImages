import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit, OnDestroy {

  constructor(private fsObj:ConsumeService,private fullData:ActivatedRoute) { }
  mySubscription:Subscription;
  camlist:any;

  ngOnInit(): void {

    let id=this.fullData.snapshot.params.id
    this.mySubscription= this.fsObj.getRoversData(id).subscribe(
      camerasData=>{
        this.camlist=camerasData;
       },
      err=>{
        console.error("Error in getting Camera Data",err)
      }
    )
  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
