import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FileResponse } from '../../../_models/fileResponse';
import { Arquivo } from "../../../_models/Arquivo";
import { LoadingService } from '../../../_shared/services/loading.service';
import { PastaTreinamentoMerchan } from '../pasta-treinamento-merchan';
import { TreinamentoMerchanService } from '../treinamentoMerchan.service';

@Component({
    selector: 'app-modal-nova-pasta',
    templateUrl: './modal-nova-pasta.component.html',
    styleUrls: ['./modal-nova-pasta.component.css']
})
export class ModalNovaPastaComponent implements OnInit {

    formTabela: FormGroup;
    pasta: PastaTreinamentoMerchan = {} as PastaTreinamentoMerchan;
    closeResult: string;
    listaArquivos: Arquivo[] = [];

    @Input()
    idPai: string = '';

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
        this.pasta = null;
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
        if (this.formTabela.valid && !this.formTabela.pending) {
            this.loadingService.show();

            const pasta = this.formTabela.getRawValue() as PastaTreinamentoMerchan;

            this.pasta = pasta;
            this.pasta.idPai = this.idPai;

            this.service.postPastaEditar(this.pasta).subscribe(
                res => this.postPastaEditarSuccess(res),
                err => this.postPastaEditarError(err),
            );

            this.montaForm();
            this.modalService.dismissAll();
        }
        else {
            Object.keys(this.formTabela.controls).forEach(key => {
                this.formTabela.get(key).markAsTouched();
            });
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
}