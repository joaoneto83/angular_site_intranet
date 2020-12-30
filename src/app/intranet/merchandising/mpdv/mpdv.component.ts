import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MerchandisingService } from '../merchandising.service';
import { HeaderService } from '../../header/header.service';
import { ModalEnviarArquivoComponent } from '../../_shared/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { ModalVisualizarImagemComponent } from '../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.component';
import { Arquivo } from "../../../_models/Arquivo";
import { ModalArquivoMpdvComponent } from './modal-arquivo-mpdv/modal-arquivo-mpdv.component';
import { LoadingService } from '../../../_shared/services/loading.service';

@Component({
    selector: 'app-mpdv',
    templateUrl: './mpdv.component.html',
    styleUrls: ['./mpdv.component.css']
})
export class MpdvComponent implements OnInit {

    @ViewChild(ModalEnviarArquivoComponent)
    modalEnviarArquivoComponent: ModalEnviarArquivoComponent;

    @ViewChild(ModalVisualizarImagemComponent)
    modalVisualizarArquivoComponent: ModalVisualizarImagemComponent;

    @ViewChild('modalArquivoMpdv')
    modalArquivoMpdv: ModalArquivoMpdvComponent;


    constructor(private headerService: HeaderService,
        private service: MerchandisingService,
        private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService) {
        this.headerService.menuAtivo('Merchandising');

    }

    arquivos: Arquivo[];

    ngOnInit(): void {
        this.arquivos = this.activatedRoute.snapshot.data['arquivos'];
    }

    retornaCarregamento() {
        this.service.getArquivosMpdv().subscribe(
            res => this.arquivos = res,
            err => console.log(err)
        )
    }

    abreEnviarArquivo(id) {
        this.modalEnviarArquivoComponent.open(id);
    }

    abreVisualizarArquivo(caminho) {
        this.modalVisualizarArquivoComponent.open(caminho);
    }

    isImage(caminho) {
        if (caminho)
            return this.modalVisualizarArquivoComponent.isImagem(caminho);
    }

    open(codigo: string, isConsulta: boolean) {
        let model = {
            codigoTipoArquivo: codigo,
            ativo: true
        } as Arquivo;

        this.modalArquivoMpdv.open(model, isConsulta);
    }

    openConsulta(arquivo: Arquivo){
        let model = arquivo;

        this.modalArquivoMpdv.open(model, true);
    }

    editArquivo(arquivo: Arquivo) {
        let model = arquivo;

        this.modalArquivoMpdv.open(model, false);
    }

    excluirArquivo(id) {
        Swal.fire({
            title: 'Deseja excluir o arquivo?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.loadingService.show()
                this.service.apagarArquivo(id).subscribe(
                    res => this.apagarArquivoSucess(res),
                    err => this.apagarArquivoError(err),
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

    apagarArquivoSucess(res) {
        this.service.getArquivosMpdv().subscribe(
            res => this.arquivos = res,
            err => console.log(err)
        )
        this.loadingService.hide();
        Swal.fire(
            'Arquivo excluído com sucesso!',
            '',
            'success'
        )
    }

    apagarArquivoError(err) {
        console.log('erro ao apagar arquivo: ' + err.message);
        this.loadingService.hide();
        Swal.fire(
            'Erro',
            'Ocorreu um erro ao excluir o arquivo',
            'error'
        )
    }
}