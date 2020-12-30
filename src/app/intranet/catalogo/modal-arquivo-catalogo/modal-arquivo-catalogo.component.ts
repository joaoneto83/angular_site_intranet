import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileResponse } from '../../../../app/_models/fileResponse';
import { Arquivo } from "../../../../app/_models/Arquivo";
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { CatalogoService } from '../catalogo.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-modal-arquivo-catalogo',
    templateUrl: './modal-arquivo-catalogo.component.html',
    styleUrls: ['./modal-arquivo-catalogo.component.css']
})
export class ModalArquivoCatalogoComponent implements OnInit {

    @Input()
    arquivo: Arquivo;
    @Input()
    idPai: string;
    @Input()
    codigoTipoArquivo: string;
    @Input()
    idArquivo: string;
    @Input()
    nomeArquivo: string;
    @Input()
    isLinha: boolean;

    @Output()
    recarregar = new EventEmitter<boolean>();

    closeResult: string;

    constructor(private modalService: NgbModal,
        private catalogoService: CatalogoService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
        if (this.isLinha && this.idArquivo != '00000000-0000-0000-0000-000000000000')
            this.arquivo = {
                id: this.idArquivo,
                nomeArquivo: this.nomeArquivo
            } as Arquivo;

    }

    open(content) {
        this.modalService.open(content, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.modalService.dismissAll();
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    salvar() {
        if (this.arquivo) {
            Swal.fire({
                title: 'Ateção',
                text: 'Ao salvar qualquer arquivo adicionado anteriormente a esse catálogo será excluído. Deseja continuar?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            }).then((result) => {
                if (result.value) {
                    this.loadingService.show();
                    this.catalogoService.postSalvarArquivo(this.arquivo).subscribe(
                        res => this.postSalvarArquivoSuccess(res),
                        err => this.postSalvarArquivoError(err),
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
        else {
            Swal.fire('Atenção', 'Selecione um arquivo para salvar', 'warning');
        }

    }

    getRespostaArquivo(fileResponse: FileResponse) {
        let modelArquivos = {
            nomeArquivo: fileResponse.arquivo.split('_').pop(),
            caminho: fileResponse.caminho,
            idPai: this.idPai,
            codigoTipoArquivo: this.codigoTipoArquivo
        } as Arquivo;

        this.arquivo = modelArquivos;
    }

    postSalvarArquivoSuccess(res) {
        this.modalService.dismissAll();
        this.loadingService.hide();
        this.recarregar.emit(res);
        setTimeout(() => {
            if (res)
                Swal.fire('Sucesso!', 'Catálogo salvo com sucesso.', 'success');

            else
                Swal.fire('Erro', 'Erro ao salvar Catálogo.', 'error');
        }, 500);
    }

    postSalvarArquivoError(err) {
        this.loadingService.hide();
        console.log('erro salvando novo arquivo: ' + err.message);
        Swal.fire('Erro', 'Erro ao salvar Catálogo.', 'error');
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
                this.catalogoService.apagarArquivo(id).subscribe(
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
        this.recarregar.emit(res);
        this.loadingService.hide();
        Swal.fire(
            'Arquivo excluído com sucesso!',
            '',
            'success'
        )
        this.arquivo = null;
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