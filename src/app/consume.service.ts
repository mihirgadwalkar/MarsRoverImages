import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../app/models/data.model'

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private hc:HttpClient) { }
  
  getData():Observable<Data[]>{
    return this.hc.get<Data[]>('http://localhost:3000/photos')
  }
  getDataById(id):Observable<Data>{
      return this.hc.get<Data>('http://localhost:3000/photos/'+id)
  }
   
  getRoverData():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/rovers')
  }
  getRoverDataById(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/rovers/'+id)
}
}
