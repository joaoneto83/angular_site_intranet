import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { TabelaPrecoService } from '../tabelaPreco.service';
import { TabelaPreco } from '../tabela-preco';
import { FileResponse } from '../../../_models/fileResponse';
import { Arquivo } from "../../../_models/Arquivo";
import { LoadingService } from '../../../_shared/services/loading.service';

@Component({
    selector: 'app-modal-nova-tabela',
    templateUrl: './modal-nova-tabela.component.html',
    styleUrls: ['./modal-nova-tabela.component.css']
})
export class ModalNovaTabelaComponent implements OnInit {

    formTabela: FormGroup;
    tabela: TabelaPreco;
    closeResult: string;
    listaArquivos: Arquivo[] = [];
    
    @Input()
    idPasta: string = '';

    @Output()
    recarregar = new EventEmitter<boolean>();

    constructor(private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private tabelaService: TabelaPrecoService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.montaForm();
    }

    montaForm() {
        this.formTabela = this.formBuilder.group({
            nomeTabelaPreco: ["", Validators.required]
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
        this.tabela = null;
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

            const modelTabela = this.formTabela.getRawValue() as TabelaPreco;

            this.tabela = modelTabela;
            this.tabela.arquivos = this.listaArquivos;
            this.tabela.idPastaTabelaPreco = this.idPasta

            this.tabelaService.postNovaTabela(this.tabela).subscribe(
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
            Swal.fire('Sucesso!', 'Tabela salva com sucesso.', 'success');

        else
            Swal.fire('Erro', 'Erro ao salvar Tabela.', 'error');

    }

    postNovaTabelaError(err) {
        this.loadingService.hide();
        console.log('erro salvando novo produto: ' + err.message);
        Swal.fire('Erro', 'Erro ao salvar Tabela.', 'error');
    }
}