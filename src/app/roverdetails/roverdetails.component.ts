import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsumeService } from '../consume.service';

@Component({
  selector: 'app-roverdetails',
  templateUrl: './roverdetails.component.html',
  styleUrls: ['./roverdetails.component.css']
})
export class RoverdetailsComponent implements OnInit {

  camreq:any;
  dataObj:any;
  display:any;
  constructor(private ar:ActivatedRoute,private fsObj:ConsumeService) { }

   ngOnInit(): void {
    this.camreq=this.fsObj.getCamdata()
    this.dataObj=this.fsObj.getid()
    this.display=this.camreq[this.dataObj-1]
  }
  
}
