import { NgModule } from '@angular/core';
import { FiltraPorTipoArquivo } from './filtra-por-tipo-arquivo.pipe';
import { FiltraPorCodigoLinha } from './filtra-por-codigo-linha.pipe';

@NgModule({
  declarations: [ 
    FiltraPorTipoArquivo,
    FiltraPorCodigoLinha
   ],
  imports: [],
  exports: [FiltraPorTipoArquivo, FiltraPorCodigoLinha]
})
export class AppPipeModule { }
