import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../_shared/services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { PastaTreinamentoMerchan } from '../pasta-treinamento-merchan';
import { TreinamentoMerchanService } from '../treinamentoMerchan.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-modal-mover-item',
    templateUrl: './modal-mover-item.component.html',
    styleUrls: ['./modal-mover-item.component.css']
})
export class ModalMoverItemComponent implements OnInit {

    @Input()
    id: string = '';

    @Input()
    isTreinamento: boolean = false;

    @Input()
    pastas: PastaTreinamentoMerchan[];

    idPastaSelecionada: string = '';
    closeResult: string;

    @Output()
    recarregar = new EventEmitter<boolean>();

    constructor(private activatedRoute: ActivatedRoute,
        private modalService: NgbModal,
        private service: TreinamentoMerchanService,
        private loadingService: LoadingService) { }

    ngOnInit(): void {
    }

    open(content) {
        this.loadingService.show();
        this.service.getPastas().subscribe(
            res => { 
                this.pastas = res;
                let idPastaAberta = this.activatedRoute.snapshot.params['id'];
                this.pastas = this.pastas.filter(x => x.id != idPastaAberta);

                if(!this.isTreinamento)
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
        this.modalService.dismissAll();
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

            this.service.mover(this.id, this.isTreinamento, this.idPastaSelecionada).subscribe(
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
            if (this.isTreinamento)
                Swal.fire('Sucesso!', 'Treinamento movido com sucesso.', 'success');
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