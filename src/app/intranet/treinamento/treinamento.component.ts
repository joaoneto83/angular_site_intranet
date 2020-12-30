import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { ActivatedRoute } from '@angular/router';
import { Linha } from '../../../app/_models/linha';
import { ModalEditDocumentosComponent } from './modal-edit-documentos/modal-edit-documentos.component';
import { DocumentosTreinamento } from './documentos-treinamento';
import { Produto } from '../../../app/_models/produto';
import { TreinamentoService } from './treinamento.service';
import { LoadingService } from '../../../app/_shared/services/loading.service';
import { ModalVisualizarVideoComponent } from '../_shared/modal-visualizar-video/modal-visualizar-video.component';

@Component({
  selector: 'app-treinamento',
  templateUrl: './treinamento.component.html',
  styleUrls: ['./treinamento.component.css']
})
export class TreinamentoComponent implements OnInit {

  linhas: Linha[];

  @ViewChild('modalTreinamento')
  modalTreinamento: ModalEditDocumentosComponent;

  @ViewChild('modalVideo')
  modalVideo: ModalVisualizarVideoComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private treinamentoService: TreinamentoService,
    private loadingService: LoadingService,
    private headerService: HeaderService) {
    this.headerService.menuAtivo('Treinamentos');
  }

  ngOnInit() {

    this.linhas = this.activatedRoute.snapshot.data["linhas"];
  }

  open() {

    let model = {
      idLinha: "",
      idProduto: "",
      idSublinha: "",
      arquivos: []
    } as DocumentosTreinamento;

    this.modalTreinamento.open(model);
  }

  editLinha(linha: Linha) {

    let model = {
      idLinha: linha.id,
      arquivos: linha.arquivos
    } as DocumentosTreinamento;

    this.modalTreinamento.open(model);
  }

  editProduto(produto: Produto, idLinha: string, idSublinha: string) {

    let model = {
      idLinha: idLinha,
      idSublinha: idSublinha,
      idProduto: produto.id,
      arquivos: produto.arquivos
    } as DocumentosTreinamento;

    this.modalTreinamento.open(model);
  }

  recarregarItens() {
    this.loadingService.show();

    this.treinamentoService.GetDocumentos().subscribe(
      res => {
        this.linhas = res;
        this.loadingService.hide();
      },
      err => {
        console.error(err);
        this.loadingService.hide();
      }
    )
  }

  openVideo(codigo) {
    this.modalVideo.open(codigo);
  }
}
