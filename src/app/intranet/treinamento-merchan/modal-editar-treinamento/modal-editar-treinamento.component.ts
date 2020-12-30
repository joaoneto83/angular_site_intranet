import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FileResponse } from '../../../_models/fileResponse';
import { Arquivo } from "../../../_models/Arquivo";
import { LoadingService } from '../../../_shared/services/loading.service';
import { TreinamentoMerchan } from '../teinamento-merchan';
import { TreinamentoMerchanService } from '../treinamentoMerchan.service';

@Component({
    selector: 'app-modal-editar-treinamento',
    templateUrl: './modal-editar-treinamento.component.html',
    styleUrls: ['./modal-editar-treinamento.component.css']
})
export class ModalEditarTreinamentoComponent implements OnInit {


    @Input()
    treinamento: TreinamentoMerchan = {} as TreinamentoMerchan;

    listaArquivos: Arquivo[] = [];
    closeResult: string;
    nome: string;
    ativo: boolean;
    
    @Output()
    recarregar = new EventEmitter<boolean>();

    constructor(private modalService: NgbModal,
        private treinamentoService: TreinamentoMerchanService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.nome = this.treinamento.nome;
        this.listaArquivos = this.treinamento.arquivos;
        this.ativo = this.treinamento.ativo;
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
        if (this.nome != '') {
            this.loadingService.show();

            let model = {
                nome: this.nome,
                id: this.treinamento.id,
                arquivos: this.listaArquivos,
                ativo: this.ativo
            } as TreinamentoMerchan;

            this.treinamentoService.postEditarTreinamento(model).subscribe(
                res => this.postSuccess(res),
                err => this.postError(err),
            );

            this.modalService.dismissAll();
        }
        else {
            Swal.fire('Atenção', 'O campo Nome é obrigatório', 'warning');
        }
    }

    getRespostaArquivo(fileResponse: FileResponse) {
        let modelArquivos = {
            nomeArquivo: fileResponse.arquivo.split('_').pop(),
            caminho: fileResponse.caminho,
            idPai: this.treinamento.id,
            codigoTipoArquivo: 'treinamentosMerchan'
        } as Arquivo;

        this.listaArquivos.push(modelArquivos);
    }

    postSuccess(res) {
        this.loadingService.hide();
        this.recarregar.emit(res);
        if (res)
            Swal.fire('Sucesso!', 'Treinamento salvo com sucesso.', 'success');

        else
            Swal.fire('Erro', 'Erro ao salvar Treinamento.', 'error');
    }

    postError(err) {
        this.loadingService.hide();
        console.log(err);
        Swal.fire('Erro', 'Erro ao salvar Treinamento.', 'error');
    }

    excluirArquivo(index){
        this.listaArquivos.splice(index, 1);
    }
}