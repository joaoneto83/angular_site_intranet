import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModuloArquivoTi } from '../moduloArquivoTi';
import { EditModuloArquivoTiComponent } from '../edit-modulo-arquivo-ti/edit-modulo-arquivo-ti.component';

@Component({
    selector: 'app-card-modulo-arquivo-ti',
    templateUrl: './card-modulo-arquivo-ti.component.html',
    styleUrls: ['./card-modulo-arquivo-ti.component.css']
})
export class CardModuloArquivoTiComponent {

    @Input()
    modulo: ModuloArquivoTi;
    @Input()
    tamanhoItens: string = 'col-sm-4';
    @Input()
    modal: EditModuloArquivoTiComponent;
  
    ngOnInit(): void {
      if (this.modulo.arquivos.length > 0) {
        this.modulo.arquivos.forEach(element => {
          element.extensao = element.caminho.split('.').pop();
        });
  
        if (this.modulo.arquivos.length == 1)
          this.tamanhoItens = 'col-sm-12';
  
        if (this.modulo.arquivos.length == 2)
          this.tamanhoItens = 'col-sm-6';
  
        if (this.modulo.arquivos.length >= 3)
          this.tamanhoItens = 'col-sm-4';
      }
    }

    editModulo(modulo: ModuloArquivoTi) {
      let model = modulo;
      this.modal.open(model);
  }
}