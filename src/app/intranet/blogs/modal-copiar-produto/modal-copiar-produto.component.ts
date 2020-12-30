import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { AdminBlogsService } from '../admin-blogs.service';
import { Produto } from '../../../_models/produto';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-modal-copiar-produto',
    templateUrl: './modal-copiar-produto.component.html',
    styleUrls: ['./modal-copiar-produto.component.css']
})
export class ModalCopiarProdutoComponent implements OnInit {

    caminho: string;

    closeResult: string;

    produtos: Produto[] = [];

    txtPesquisa: string;

    @ViewChild('contentCopiarProduto')
    divContent: ElementRef<HTMLInputElement>;

    @Output()
    idProdutoDestino = new EventEmitter<string>();

    constructor(private modalService: NgbModal,
        private loadingService: LoadingService,
        private service: AdminBlogsService) { }

    ngOnInit(): void {
    }

    open(sublinha, idProduto) {
        this.loadingService.show();
        this.service.getProdutosCopiar(sublinha).subscribe(
            res => {
                this.loadingService.hide();
                this.produtos = res.filter(x => x.id != idProduto);
            },
            err => {
                this.loadingService.hide();
                console.log(err);
            }
        );

        this.modalService.open(this.divContent, { windowClass: 'modalCopiarArquivo', backdropClass: 'modelBackdrop', centered: true }).result.then((result) => {
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

    selecionarProduto(produto) {
        Swal.fire({
            title: 'Atenção!',
            text: 'Tem certeza que deseja copiar as Especificações Técnicas e Classificações para o produto ' + produto.nomeProduto + '?' + ' Essa ação irá sobrescrever o dados já existentes do produto ' + produto.nomeProduto,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.idProdutoDestino.emit(produto.id);

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cópia Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                );
            }
        });
    }
}