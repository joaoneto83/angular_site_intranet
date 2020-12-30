import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileResponse } from '../../../../_models/fileResponse';
import { LoadingService } from '../../../../_shared/services/loading.service';
import Swal from 'sweetalert2';
import { ElginNews } from '../../../../_models/elginNews';
import { AdminElginNewsService } from '../admin-elgin-news.service';

@Component({
    selector: 'app-modal-editar-elginnews',
    templateUrl: './modal-editar-elginnews.component.html',
    styleUrls: ['./modal-editar-elginnews.component.css']
})
export class ModalEditarElginNewsComponent implements OnInit {

    @Input()
    elginNews: ElginNews;

    closeResult: string;

    @Output()
    recarregar = new EventEmitter<boolean>();

    constructor(
        private modalService: NgbModal,
        private adminElginNews: AdminElginNewsService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
        if(this.elginNews == null)
            this.elginNews = {
                ativo:  true
            } as ElginNews;
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
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
        this.adminElginNews.Salvar(this.elginNews).subscribe(
            res => this.SalvarSuccess(res),
            err => this.SalvarError(err)
        );
    }

    remover(id) {
        this.adminElginNews.Remover(id).subscribe(
            res => this.RemoverSuccess(res),
            err => this.RemoverError(err)
        );
    }

    RemoverError(err: any): void {
        console.log(err);

        Swal.fire('Erro', 'Erro ao remover.', 'error');
    }

    RemoverSuccess(res: boolean): void {
        if (res) {
            Swal.fire('Sucesso!', 'Removido com sucesso.', 'success');
            this.close();
            this.recarregar.emit();
        }
        else {
            Swal.fire('Erro', 'Erro ao remover.', 'error');
        }
    }

    SalvarError(err: any): void {
        console.log(err);

        Swal.fire('Erro', 'Erro ao salvar.', 'error');
    }

    SalvarSuccess(res: boolean): void {
        if (res) {
            Swal.fire('Sucesso!', 'Salvo com sucesso.', 'success');

            this.close();
            this.recarregar.emit();
        }
        else {
            Swal.fire('Erro', 'Erro ao salvar.', 'error');
        }
    }

    getRespostaArquivo(fileResponse: FileResponse) {
        this.elginNews.arquivo = null;
        this.elginNews.arquivo = fileResponse.caminho;
    }

    getRespostaImagem(fileResponse: FileResponse) {
        this.elginNews.imagem = null;
        this.elginNews.imagem = fileResponse.caminho;
    }
}