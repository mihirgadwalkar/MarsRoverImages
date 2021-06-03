import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-roverdetails',
  templateUrl: './roverdetails.component.html',
  styleUrls: ['./roverdetails.component.css']
})
export class RoverdetailsComponent implements OnInit {

  dataObj:Data;
  constructor(private ar:ActivatedRoute,private fs:ConsumeService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;
    this.fs.getRoverDataById(id).subscribe(
      obj=>{
        this.dataObj=obj;
      },
      err=>{
        console.log("err in reading data",err)
      }
    )
  }

}
