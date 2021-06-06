import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  constructor(private fsObj:ConsumeService,private routeData:Router,private fullData:ActivatedRoute) { }

  camlist:any;

  ngOnInit(): void {

    let id=this.fullData.snapshot.params.id

    this.fsObj.getRoversData(id).subscribe(
      camerasData=>{
        this.camlist=camerasData;
        console.log(this.camlist)
       },
      err=>{
        console.error("Error in getting data",err)
      }
    )
  }

  getDetailedCamerasData(id){
    this.routeData.navigateByUrl('camera-details/'+id)
    this.fsObj.setCamdata(id,this.camlist.camerasData)
  }

}
