import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Arquivo } from "../../../../app/_models/Arquivo";
import Swal from 'sweetalert2'
import { ArquivoService } from '../arquivo.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEnviarArquivoComponent } from '../../_shared/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { ModalVisualizarImagemComponent } from '../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.component';

@Component({
  selector: 'app-bloco',
  templateUrl: './bloco.component.html',
  styleUrls: ['./bloco.component.css']
})
export class BlocoComponent implements OnInit {

  @Input()
  icone: string;

  @Input()
  height: string;

  @Input()
  liHeight: string;

  @Input()
  titulo: string;

  @Input()
  itens: Arquivo[];

  @Input()
  fotos: Arquivo[];

  @Input()
  tipoArquivo: string;

  @Input()
  idProduto: string;

  maxHeightUl: string;

  @ViewChild(ModalEnviarArquivoComponent)
  modalEnviarArquivoComponent: ModalEnviarArquivoComponent;

  @ViewChild(ModalVisualizarImagemComponent)
  modalVisualizarArquivoComponent: ModalVisualizarImagemComponent;
  
  constructor(private arquivoService: ArquivoService, private _modalService: NgbModal) { }

  ngOnInit(): void {
    let max = Number(this.height) - 110;
    this.maxHeightUl = max.toString();
  }

  ngOnChange() {
  }

  apagarArquivo(id: string): void {
    Swal.fire({
      title: 'Deseja excluir esse arquivo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.arquivoService.apagarArquivo(id).subscribe(
          res => this.postNovoProdutoSuccess(res, id),
          err => this.postNovoProdutoError(err),
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Exclusão Cancelada',
          'Operação cancelada pelo usuário',
          'error'
        )
      }
    })

  }

  postNovoProdutoSuccess(res, id: string) {
    this.itens = this.itens.filter(item => item.id !== id);
    Swal.fire(
      'Arquivo excluído com sucesso!',
      '',
      'success'
    )
  }

  postNovoProdutoError(err) {
    console.log('erro ao apagar arquivo: ' + err.message);
    Swal.fire(
      'Erro',
      'Ocorreu um erro ao excluir o arquivo',
      'error'
    )
  }

  copyToClipboard(item) {
    let selBox = document.createElement('textarea');

    selBox.value = item;

    document.body.appendChild(selBox);
    selBox.select();

    document.execCommand('copy');
    document.body.removeChild(selBox);

    alert("Link copiado com sucesso!");
  }

  retornaNovoItem($event) {
    if (this.itens.find(x => x.id == $event.id)) {
      this.itens = this.itens.filter(x => x.id != $event.id);
      this.itens.push($event);
     
    }
    else {
      
      this.itens.push($event);
    }

    // if($event.codigoTipoArquivo == "imgCard")
    // {
    //   this.fotos = this.itens.filter(x => x.codigoTipoArquivo == "imgCard");
    //   this.fotos = [...this.fotos];
    // }
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