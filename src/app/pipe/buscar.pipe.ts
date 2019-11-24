import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args ==='' || args.length <3) return value
    const resultadoBuscar =[];
    for(const buscar of value){
      if((buscar.name || buscar.apellidopa).toLowerCase().indexOf(args.toLowerCase()) >-1){
    resultadoBuscar.push(buscar);    
      };
    };
    return resultadoBuscar;
  }

}
