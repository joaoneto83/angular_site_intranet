import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FileResponse } from '../../../_models/fileResponse';
import { Arquivo } from "../../../_models/Arquivo";
import { LoadingService } from '../../../_shared/services/loading.service';
import { TreinamentoMerchan } from '../teinamento-merchan';
import { TreinamentoMerchanService } from '../treinamentoMerchan.service';

@Component({
    selector: 'app-modal-novo-treinamento',
    templateUrl: './modal-novo-treinamento.component.html',
    styleUrls: ['./modal-novo-treinamento.component.css']
})
export class ModalNovoTreinamentoComponent implements OnInit {

    formTabela: FormGroup;
    treinamento: TreinamentoMerchan = {} as TreinamentoMerchan;
    closeResult: string;
    listaArquivos: Arquivo[] = [];
    
    @Input()
    idPasta: string = '';

    @Output()
    recarregar = new EventEmitter<boolean>();

    constructor(private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private service: TreinamentoMerchanService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.montaForm();
    }

    montaForm() {
        this.formTabela = this.formBuilder.group({
            nome: ["", Validators.required]
        });
    }

    open(content) {
        this.modalService.open(content, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.limparForm();
    }

    limparForm() {
        this.formTabela.reset();
        this.treinamento = {} as TreinamentoMerchan;
        this.montaForm();
        this.modalService.dismissAll();
    }

    private getDismissReason(reason: any): string {
        this.limparForm();

        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    salvar() {
        this.loadingService.show();
        if (this.formTabela.valid && !this.formTabela.pending) {

            const modelTabela = this.formTabela.getRawValue() as TreinamentoMerchan;

            this.treinamento = modelTabela;
            this.treinamento.arquivos = this.listaArquivos;
            this.treinamento.idPastaTreinamentoMerchan = this.idPasta

            this.service.postEditarTreinamento(this.treinamento).subscribe(
                res => this.postNovaTabelaSuccess(res),
                err => this.postNovaTabelaError(err),
            );

            this.formTabela.reset();
            this.listaArquivos = [];
            this.montaForm();
            this.modalService.dismissAll();
        }
        else {
            Object.keys(this.formTabela.controls).forEach(key => {
                this.formTabela.get(key).markAsTouched();
            });
        }
    }

    getRespostaArquivo(fileResponse: FileResponse) {

        let modelArquivos = {
            nomeArquivo: fileResponse.arquivo.split('_').pop(),
            caminho: fileResponse.caminho
        } as Arquivo;
        this.listaArquivos.push(modelArquivos);

    }

    postNovaTabelaSuccess(res) {
        this.loadingService.hide();
        this.recarregar.emit(res);
        if (res)
            Swal.fire('Sucesso!', 'Treinamento salvo com sucesso.', 'success');

        else
            Swal.fire('Erro', 'Erro ao salvar Treinamento.', 'error');

    }

    postNovaTabelaError(err) {
        this.loadingService.hide();
        console.log(err.message);
        Swal.fire('Erro', 'Erro ao salvar Treinamento.', 'error');
    }
}