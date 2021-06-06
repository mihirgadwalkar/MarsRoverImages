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

  req:any
  objid:any
  display:any
  constructor(private dsObj:ConsumeService) { }

  ngOnInit() {
  
    this.req=this.dsObj.getImgdata()
    this.objid=this.dsObj.getid()
    this.display=this.req[this.objid-1]
    console.log(this.display);
  }
  
}
