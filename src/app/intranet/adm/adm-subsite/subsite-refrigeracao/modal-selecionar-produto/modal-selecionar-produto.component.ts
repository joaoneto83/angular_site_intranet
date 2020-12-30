import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from '../../../../../_models/produto';
import { LoadingService } from '../../../../../_shared/services/loading.service';
import { ProdutoService } from '../../../../../_shared/services/produto.service';

@Component({
    selector: 'app-modal-selecionar-produto',
    templateUrl: './modal-selecionar-produto.component.html',
    styleUrls: ['./modal-selecionar-produto.component.css']
})
export class ModalSelecionarProdutoComponent implements OnInit {

    caminho: string;
    closeResult: string;
    produtos: Produto[] = [];
    txtPesquisa: string;
    codigoGrupo: string;
    isSegmento: boolean

    @ViewChild('contentSelecionarProduto')
    divContent: ElementRef<HTMLInputElement>;

    @Output()
    response = new EventEmitter<{ produtos: Produto[], codigoGrupo: string, isSegmento: boolean }>();


    constructor(private modalService: NgbModal,
        private loadingService: LoadingService,
        private produtoService: ProdutoService) { }

    ngOnInit(): void {
    }

    open(codigoGrupo, produtos, isSegmento) {
        this.txtPesquisa = '';
        this.loadingService.show();
        this.codigoGrupo = codigoGrupo;
        this.isSegmento = isSegmento;

        this.produtoService.getProdutosPorCodigoLinha('Refrigeracao').subscribe(
            res => {
                this.loadingService.hide();
                this.produtos = res;

                if (produtos.length > 0){
                    this.produtos.forEach( x => {
                        produtos.forEach(y => {
                            if(y == x.id)
                                x.selecionado = true;                            
                        });
                    });
                }
            },
            err => {
                this.loadingService.hide();
                console.log(err);
            }
        );

        this.modalService.open(this.divContent, { windowClass: 'modalSelecionarArquivo', backdropClass: 'modelBackdrop', centered: true }).result.then((result) => {
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

    selecionarProdutos() {
        this.response.emit({ produtos: this.produtos.filter(x => x.selecionado == true), codigoGrupo: this.codigoGrupo, isSegmento: this.isSegmento });
    }
}