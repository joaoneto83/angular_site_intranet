import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { TabelaPrecoService } from '../tabelaPreco.service';
import { TabelaPreco } from '../tabela-preco';
import { FileResponse } from '../../../../app/_models/fileResponse';
import { Arquivo } from "../../../../app/_models/Arquivo";
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { PastaTabelaPreco } from '../pasta-tabela-preco';

@Component({
    selector: 'app-modal-editar-pasta',
    templateUrl: './modal-editar-pasta.component.html',
    styleUrls: ['./modal-editar-pasta.component.css']
})
export class ModalEditarPastaComponent implements OnInit {

    @Input()
    pasta: PastaTabelaPreco;

    listaArquivos: Arquivo[] = [];
    closeResult: string;
    nome: string;
    ativo: boolean;
    
    @Output()
    recarregar = new EventEmitter<boolean>();

    constructor(private modalService: NgbModal,
        private tabelaService: TabelaPrecoService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
    }

    open(content) {
        this.modalService.open(content, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });

        this.nome = this.pasta.nome;
        this.ativo = this.pasta.ativo;
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
        if (this.nome != '') {
            this.loadingService.show();

            let modelPasta = {
                nome: this.nome,
                id: this.pasta.id,
                ativo: this.ativo
            } as PastaTabelaPreco;

            this.tabelaService.postPastaEditar(modelPasta).subscribe(
                res => this.postPastaEditarSuccess(res),
                err => this.postPastaEditarError(err),
            );

            this.modalService.dismissAll();
        }
        else {
            this.validarNome();
        }
    }

    postPastaEditarSuccess(res) {
        this.loadingService.hide();
        this.recarregar.emit(res);
        if (res)
            Swal.fire('Sucesso!', 'Pasta salva com sucesso.', 'success');

        else
            Swal.fire('Erro', 'Erro ao salvar Pasta.', 'error');
    }

    postPastaEditarError(err) {
        this.loadingService.hide();
        console.log(err);
        Swal.fire('Erro', 'Erro ao salvar Pasta.', 'error');
    }

    excluirArquivo(index){
        this.listaArquivos.splice(index, 1);
    }

    validarNome(){
        if(this.nome == ''){
            Swal.fire('Atenção', 'O nome é obrigatório.', 'warning');
        }
    }
}