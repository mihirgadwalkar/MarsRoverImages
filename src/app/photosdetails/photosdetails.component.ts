import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../models/data.model';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-photosdetails',
  templateUrl: './photosdetails.component.html',
  styleUrls: ['./photosdetails.component.css']
})
export class PhotosdetailsComponent implements OnInit {

  dataObj:Data;
  constructor(private ar:ActivatedRoute,private fs:ConsumeService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    let name=this.ar.snapshot.params.name;
    console.log(id,name);
    /* this.fs.getPhotosData(id,name).subscribe(
      obj=>{
        this.dataObj=obj;
        console.log(this.dataObj)
      },
      err=>{
        console.log("err in reading data",err)
      }
    ) */
  }

}
