import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(imglist:any[],searchTerm:string): any[] {

    if(!imglist || !searchTerm){
      return imglist;
    }
    else{
      return imglist.filter(img=>
        img.camera.name.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1 );
    }
    
  }

}
