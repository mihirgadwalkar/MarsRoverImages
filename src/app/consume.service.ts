import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../app/models/data.model'

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
}
