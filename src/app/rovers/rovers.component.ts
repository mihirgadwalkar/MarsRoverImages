import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.css']
})
export class RoversComponent implements OnInit {

  rovers:any;
  constructor(private dataObj:ConsumeService,private routeData:Router) { }

  ngOnInit(): void {
    this.dataObj.getData().subscribe(
      data=>{
        this.rovers=data
      },
      err=>{
        console.error("Error in getting data",err)
      }
    )
  }

  getCameraFullData(id){
    this.routeData.navigateByUrl('cameras/'+id)
  }

  getPhotosFullData(id){
    this.routeData.navigateByUrl('photos/'+id)
  }
}