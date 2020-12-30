import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Linha } from '../../../_models/linha';
import { Produto } from '../../../_models/produto';
import { SubLinha } from '../../../_models/subLinha';
import { LinhaService } from '../../../_shared/services/linha.service';
import { SubLinhaService } from '../../../_shared/services/subLinha.service';
import { FileResponse } from '../../../_models/fileResponse';
import { Arquivo } from "../../../_models/Arquivo";
import { DocumentosTreinamento } from '../documentos-treinamento';
import { TreinamentoService } from '../treinamento.service';
import { ProdutoService } from '../../../_shared/services/produto.service';

@Component({
    selector: 'app-modal-edit-documentos',
    templateUrl: 'modal-edit-documentos.component.html',
    styleUrls: ['modal-edit-documentos.component.css']
})
export class ModalEditDocumentosComponent implements OnInit {

    model: DocumentosTreinamento;
    linha: Linha;
    produto: Produto;

    idPai: string;

    tipo: string = 'A';

    codigoVideo: string;

    produtos: Produto[];
    linhas: Linha[];
    subLinhas: SubLinha[];

    closeResult: string;

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;

    @Input()
    linhasCadastradas: Linha[];

    @Output()
    reload = new EventEmitter();

    constructor(
        private modalService: NgbModal,
        private linhaService: LinhaService,
        private subLinhaService: SubLinhaService,
        private service: TreinamentoService,
        private router: Router,
        private produtoService: ProdutoService,
    ) { }

    ngOnInit(): void {

        this.linhaService.getLinha().subscribe(
            ret => this.getLinhasSuccess(ret),
            err => this.getLinhasError(err)
        );
    }

    getLinhasSuccess(ret: Linha[]): void {
        this.linhas = ret;
    }

    getLinhasError(err: any): void {
        console.log('erro obtendo o grupo: ' + err.message);
    }

    carregarProdutos(subLinha: string) {

        this.model.arquivos = [];

        let linhasCadastradas = this.linhasCadastradas.find(x => x.id == this.model.idLinha);

        if (linhasCadastradas)
            this.model.arquivos = linhasCadastradas.arquivos;

        this.produtoService.getProdutosPorSubLinha(subLinha).subscribe(
            ret => this.produtos = ret,
            err => console.log(err)
        )
    }

    carregarSubLinha(linha: string): void {

        this.idPai = linha;

        this.model.arquivos = [];

        let linhasCadastradas = this.linhasCadastradas.find(x => x.id == linha);

        if (linhasCadastradas)
            this.model.arquivos = linhasCadastradas.arquivos;

        this.subLinhaService.getSubLinha(linha).subscribe(
            ret => this.getSubLinhaSuccess(ret),
            err => this.getSubLinhaError(err)
        );
    }

    selecionaProduto(idProduto: string) {
        this.model.arquivos = [];

        if (idProduto) {
            this.idPai = idProduto;

            let linhaSelecionada = this.linhasCadastradas.find(x => x.id == this.model.idLinha);
            if (linhaSelecionada) {
                let sublinhaSelecionada = linhaSelecionada.subLinhas.find(x => x.id == this.model.idSublinha);
                if (sublinhaSelecionada) {
                    let produtoSelecionado = sublinhaSelecionada.produtos.find(x => x.id == idProduto)

                    if (produtoSelecionado) {
                        this.model.arquivos = produtoSelecionado.arquivos;
                    }
                }
            }
        }
        else {
            this.idPai = this.model.idLinha;

            this.model.arquivos = this.linhasCadastradas.find(x => x.id == this.model.idLinha).arquivos;
        }
    }

    getSubLinhaSuccess(ret: SubLinha[]): void {
        this.subLinhas = ret;
    }

    getSubLinhaError(err: any): void {
        console.log('erro obtendo o grupo: ' + err.message);
    }

    open(model: DocumentosTreinamento) {
        this.model = model;

        if (!this.model.idLinha) {
            this.montaForm();

            return;
        }

        this.subLinhaService.getSubLinha(model.idLinha).subscribe(
            ret => {
                this.subLinhas = ret

                if (model.idProduto) {

                    this.idPai = model.idProduto;

                    this.produtoService.getProdutosPorSubLinha(model.idSublinha).subscribe(
                        res2 => {
                            this.produtos = res2;

                            this.montaForm();
                        },
                        err => console.log(err)
                    )
                }
                else {

                    this.idPai = model.idLinha;

                    this.montaForm();
                }
            },
            err => this.getSubLinhaError(err)
        );
    }

    montaForm() {
        this.modalService.open(this.divContent, { windowClass: 'modalTreinamento', backdropClass: 'modelBackdrop', centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }

    getRespostaArquivo(fileResponse: FileResponse) {

        let modelArquivos = {
            nomeArquivo: this.getExtension(fileResponse.arquivo),
            caminho: fileResponse.caminho,
            idPai: this.idPai,
            codigoTipoArquivo: 'treinamento'
        } as Arquivo;

        this.model.arquivos.push(modelArquivos);
    }

    getExtension(caminho) {
        let extensao = caminho.split('.').pop();

        return extensao;
    }

    addVideo() {
        let modelArquivos = {
            nomeArquivo: 'Vídeo',
            caminho: this.codigoVideo,
            idPai: this.idPai,
            codigoTipoArquivo: 'treinamento'
        } as Arquivo;

        this.model.arquivos.push(modelArquivos);

        this.codigoVideo = "";
    }

    excluirArquivo(index) {
        this.model.arquivos.splice(index, 1);
    }

    close() {
        this.modalService.dismissAll();
    }

    salvar() {
        this.service.Salvar(this.model).subscribe(
            res => this.salvarSuccess(res),
            err => this.salvarError(err)
        );
    }
    salvarError(err: any): void {

        console.log(err);

        Swal.fire(
            'Erro',
            'Ocorreu um erro ao salvar o documento.',
            'error'
        );
    }
    salvarSuccess(res: boolean): void {
        if (res) {
            Swal.fire(
                'Documento salvo com sucesso!',
                '',
                'success'
            );

            this.modalService.dismissAll();

            this.reload.emit();
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o documento.',
                'error'
            );
        }
    }
}