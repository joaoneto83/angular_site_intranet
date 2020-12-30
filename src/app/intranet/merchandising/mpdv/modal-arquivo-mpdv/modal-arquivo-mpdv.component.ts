import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Arquivo } from "../../../../_models/Arquivo";
import { LoadingService } from '../../../../_shared/services/loading.service';
import { FileResponse } from '../../../../_models/fileResponse';
import { MerchandisingService } from '../../merchandising.service';

@Component({
    selector: 'app-modal-arquivo-mpdv',
    templateUrl: './modal-arquivo-mpdv.component.html',
    styleUrls: ['./modal-arquivo-mpdv.component.css']
})
export class ModalArquivoMpdvComponent implements OnInit {

    arquivo: Arquivo;
    
    @Output()
    recarregar = new EventEmitter<boolean>();

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;

    closeResult: string;

    isConsulta: boolean;

    constructor(private modalService: NgbModal,
        private service: MerchandisingService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
        if (!this.arquivo)
            this.arquivo = { nomeArquivo: '' } as Arquivo;
    }

    open(model: Arquivo, isConsulta: boolean) {
        this.arquivo = model;
        this.isConsulta = isConsulta;

        this.modalService.open(this.divContent, { windowClass: 'modalArquivoMpdv', backdropClass: 'modelBackdrop', centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }

    close() {
        this.arquivo = null;
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
        if (this.arquivo.caminho && this.arquivo.nomeArquivo) {
            this.loadingService.show();
            this.service.salvarArquivo(this.arquivo).subscribe(
                res => this.postSalvarArquivoSuccess(res),
                err => this.postSalvarArquivoError(err),
            );
        }
        else {
            Swal.fire('Atenção', 'Titulo da imagem e arquivo são obrigatórios', 'warning');
        }
    }


    getRespostaArquivo(fileResponse: FileResponse) {
        this.arquivo.caminho = fileResponse.caminho;
    }

    postSalvarArquivoSuccess(res) {
        this.modalService.dismissAll();
        this.loadingService.hide();
        this.recarregar.emit();
        setTimeout(() => {
            if (res)
                Swal.fire('Sucesso!', 'Arquivo salvo com sucesso.', 'success');

            else
                Swal.fire('Erro', 'Erro ao salvar Arquivo.', 'error');
        }, 500);
    }

    postSalvarArquivoError(err) {
        this.loadingService.hide();
        console.log('erro salvando novo arquivo: ' + err.message);
        Swal.fire('Erro', 'Erro ao salvar Catálogo.', 'error');
    }

}