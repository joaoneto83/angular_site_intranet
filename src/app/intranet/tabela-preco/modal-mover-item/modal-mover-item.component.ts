import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { TabelaPrecoService } from '../tabelaPreco.service';
import { LoadingService } from '../../../_shared/services/loading.service';
import { PastaTabelaPreco } from '../pasta-tabela-preco';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-modal-mover-item',
    templateUrl: './modal-mover-item.component.html',
    styleUrls: ['./modal-mover-item.component.css']
})
export class ModalMoverItemComponent implements OnInit {

    @Input()
    id: string = '';

    @Input()
    isTabela: boolean = false;

    @Input()
    pastas: PastaTabelaPreco[];

    idPastaSelecionada: string = '';
    closeResult: string;

    @Output()
    recarregar = new EventEmitter<boolean>();

    constructor(private activatedRoute: ActivatedRoute,
        private modalService: NgbModal,
        private tabelaService: TabelaPrecoService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
    }

    open(content) {
        this.loadingService.show();
        this.tabelaService.getPastas().subscribe(
            res => {
                this.pastas = res;
                let idPastaAberta = this.activatedRoute.snapshot.params['id'];
                this.pastas = this.pastas.filter(x => x.id != idPastaAberta);

                if (!this.isTabela)
                    this.pastas = this.pastas.filter(x => x.id != this.id);

                this.loadingService.hide();
            },
            err => {
                this.loadingService.hide();
                console.log(err);
                Swal.fire("Erro!", "Ocorreu um erro ao carregar pastas de destino", "error");
            }
        );



        this.modalService.open(content, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.idPastaSelecionada = '';
    }

    private getDismissReason(reason: any): string {
        this.idPastaSelecionada = '';

        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    salvar() {
        if (this.idPastaSelecionada != '') {
            this.loadingService.show();

            this.tabelaService.mover(this.id, this.isTabela, this.idPastaSelecionada).subscribe(
                res => this.postPastaEditarSuccess(res),
                err => this.postPastaEditarError(err),
            );

            this.modalService.dismissAll();
        }
        else {
            Swal.fire("Atenção", "Selecione alguma pasta", "warning");
        }
    }

    postPastaEditarSuccess(res) {
        this.loadingService.hide();
        this.recarregar.emit(res);
        if (res) {
            if (this.isTabela)
                Swal.fire('Sucesso!', 'Tabela de Preço movida com sucesso.', 'success');
            else
                Swal.fire('Sucesso!', 'Pasta movida com sucesso.', 'success');
        }

        else
            Swal.fire('Erro', 'Erro ao mover.', 'error');
    }

    postPastaEditarError(err) {
        this.loadingService.hide();
        console.log(err);
        Swal.fire('Erro', 'Erro ao mover.', 'error');
    }
}