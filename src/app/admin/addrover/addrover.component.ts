import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeService } from 'src/app/consume.service';
import { RoverObj } from 'src/app/models/roverObj.model';
@Component({
  selector: 'app-addrover',
  templateUrl: './addrover.component.html',
  styleUrls: ['./addrover.component.css']
})
export class AddroverComponent implements OnInit {

  constructor(private csObj:ConsumeService,private router:Router) { }
  
  ngOnInit(): void {
  }
  cameraModel=new RoverObj(0,'','','')
  onSubmitNewCamera(){
    
    this.csObj.createNewCamera(this.cameraModel).subscribe(
      res=>{
        //navigate to viewrovers component
        this.router.navigateByUrl("admin/getcam/viewrovers")

      },
      err=>{
        console.log('err in creating new camera',err)
      }
    )
}

}
