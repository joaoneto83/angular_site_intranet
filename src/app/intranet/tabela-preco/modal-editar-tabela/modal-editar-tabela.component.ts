import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { TabelaPrecoService } from '../tabelaPreco.service';
import { TabelaPreco } from '../tabela-preco';
import { FileResponse } from '../../../../app/_models/fileResponse';
import { Arquivo } from "../../../../app/_models/Arquivo";
import { LoadingService } from '../../../../app/_shared/services/loading.service';

@Component({
    selector: 'app-modal-editar-tabela',
    templateUrl: './modal-editar-tabela.component.html',
    styleUrls: ['./modal-editar-tabela.component.css']
})
export class ModalEditarTabelaComponent implements OnInit {


    @Input()
    tabela: TabelaPreco;

    listaArquivos: Arquivo[] = [];
    closeResult: string;
    nomeTabela: string;
    ativo: boolean;
    

    @Output()
    recarregar = new EventEmitter<boolean>();

    constructor(private modalService: NgbModal,
        private tabelaService: TabelaPrecoService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.nomeTabela = this.tabela.nomeTabelaPreco;
        this.listaArquivos = this.tabela.arquivos;
        this.ativo = this.tabela.ativo;
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
        if (this.nomeTabela != '') {
            this.loadingService.show();

            let modelTabela = {
                nomeTabelaPreco: this.nomeTabela,
                id: this.tabela.id,
                arquivos: this.listaArquivos,
                ativo: this.ativo
            } as TabelaPreco;

            this.tabelaService.postNovaTabela(modelTabela).subscribe(
                res => this.postNovaTabelaSuccess(res),
                err => this.postNovaTabelaError(err),
            );

            this.modalService.dismissAll();
        }
        else {
            this.validarNome();
        }
    }

    getRespostaArquivo(fileResponse: FileResponse) {
        let modelArquivos = {
            nomeArquivo: fileResponse.arquivo.split('_').pop(),
            caminho: fileResponse.caminho,
            idPai: this.tabela.id,
            codigoTipoArquivo: 'tabelaPreco'
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

    excluirArquivo(index){
        this.listaArquivos.splice(index, 1);
    }

    validarNome(){
        let formgroup = $('#inputNomeTabela');
        let labelObrigatorio = $('#spanObrigatorio');

        if(this.nomeTabela == ''){
            formgroup.classList.add('has-danger');
            labelObrigatorio.style.display = 'block';
        }
        else{
            formgroup.classList.remove('has-danger');
            labelObrigatorio.style.display = 'none';
        }
    }
}