import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../app/models/data.model'
import { Rover } from './models/rover.model';
import { Photo } from './models/photo.model';
@Injectable({
  providedIn: 'root'
})
export class ConsumeService {
  id:any;
  camdata:any;
  imgdata:any;

  constructor(private hcObj:HttpClient) { }
  
  getData():Observable<any>{
    return this.hcObj.get('http://localhost:3000/rovers/')
  }

  getRoversData(id):Observable<any>{
      return this.hcObj.get('http://localhost:3000/rovers/'+id)
  }
   
  setCamdata(id,probj){
    this.camdata=probj
    this.id=id
  }

  setImgdata(id,probj){
    this.imgdata=probj
    this.id=id
  }

  getCamdata(){
    return this.camdata
  }

  getImgdata(){
    return this.imgdata
  }

  getid(){
    return this.id
  }
  getCamerasData():Observable<Rover[]>{
    return this.hcObj.get<Rover[]>('http://localhost:3000/adminCameras')
  }
  deleteCamera(id):Observable<any>{
    console.log("id is ",id)
    return this.hcObj.delete("http://localhost:3000/adminCameras/"+id)
  }
  createNewCamera(cameraObj):Observable<any>{
    return this.hcObj.post("http://localhost:3000/adminCameras",cameraObj)
  }
  createNewPhoto(photoObj):Observable<any>{
    return this.hcObj.post("http://localhost:3000/adminPics",photoObj)
  }
  getPhotosData():Observable<any>{
    return this.hcObj.get<any>('http://localhost:3000/adminPics')
  }
  deletePhoto(id):Observable<any>{
    console.log("id is ",id)
    return this.hcObj.delete("http://localhost:3000/adminPics/"+id)
  }
}