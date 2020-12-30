import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Arquivo } from '../../../../app/_models/arquivo';
import { ModalEnviarArquivoComponent } from '../../_shared/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { ModalVisualizarImagemComponent } from '../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.component';

@Component({
  selector: 'app-acoes-catalogo',
  templateUrl: './acoes-catalogo.component.html',
  styleUrls: ['./acoes-catalogo.component.css']
})
export class AcoesCatalogoComponent implements OnInit {

  @ViewChild(ModalEnviarArquivoComponent)
  modalEnviarArquivoComponent: ModalEnviarArquivoComponent;

  @ViewChild(ModalVisualizarImagemComponent)
  modalVisualizarArquivoComponent: ModalVisualizarImagemComponent;
  
  constructor() {
  }

  @Input()
  arquivo: Arquivo;
  @Input()
  idArquivo: string;
  @Input()
  nomeArquivo: string;
  @Input()
  caminho: string;
  @Input()
  isLinha: boolean;

  ngOnInit(): void {
    if (this.isLinha && this.idArquivo != '00000000-0000-0000-0000-000000000000'){
      this.arquivo = {
        id: this.idArquivo,
        nomeArquivo: this.nomeArquivo,
        caminho: this.caminho
      } as Arquivo;
    }
  }

  abreEnviarArquivo(id) {
    this.modalEnviarArquivoComponent.open(id);
  }

  abreVisualizarArquivo(caminho)
  {
    this.modalVisualizarArquivoComponent.open(caminho);
  }

  isImage(caminho){
    return this.modalVisualizarArquivoComponent.isImagem(caminho);
  }

  isPDF(caminho){
    return this.modalVisualizarArquivoComponent.isPDF(caminho);
  }
}