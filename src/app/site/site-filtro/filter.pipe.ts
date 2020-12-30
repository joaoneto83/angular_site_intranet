import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../../_models/produto';
import { Classificacao } from '../../_models/classificacao';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(produtos: Produto[], args: string): any {

    console.log(args);
   

    if (!produtos || !produtos.length) { 
        let produtors = (prod:Produto, target):boolean => target.every(v => {
            return prod.classificacoes.map(a => a.id.toUpperCase()).includes(v.toUpperCase())
        });
        return produtos.filter(x => produtors(x, args));
        // return [];

    }
  

    if (!args) { return produtos; }

    return produtos
      .filter(item => Object.keys(item)
        .some(key => args.split(',').some(arg => item[key].toLowerCase().includes(arg.toLowerCase())))
      );
  }
}

// @Pipe({name: 'FiltrarProdutos'})
// export class SiteFiltroPipe implements PipeTransform{

//     transform(produtos: Produto[], listaIdsClassificacoes: string[]) {

//         if(produtos !== undefined && produtos !== null && listaIdsClassificacoes !== undefined && listaIdsClassificacoes !== null)
//         {
//             let checker = (prod:Produto, target):boolean => target.every(v => {
//                 return prod.classificacoes.map(a => a.id.toUpperCase()).includes(v.toUpperCase())
//             });
            
//             return produtos.filter(x => checker(x, listaIdsClassificacoes));
//         }
//         return produtos;
        
//     }

// }
// export class FilterPipe implements PipeTransform {
//     transform(items: Object[], args: string): any {
//       console.log(args);
  
//       if (!items || !items.length) { return []; }
  
//       if (!args) { return items; }
  
//       return items
//         .filter(item => Object.keys(item)
//           .some(key => args.split(',').some(arg => item[key].toLowerCase().includes(arg.toLowerCase())))
//         );
//     }
//   }