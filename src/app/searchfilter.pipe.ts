import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(imglist:any,searchValue:any): any {

    if(!imglist || !searchValue){
      return imglist;
    }
    return imglist.filter(img=>
      img.sol.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      img.camera.full_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) );
  }

}
