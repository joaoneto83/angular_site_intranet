import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AvisoService } from '../aviso.service';
import { Aviso } from '../aviso';

@Component({
    selector: 'app-edit-aviso',
    templateUrl: 'edit-aviso.component.html',
    styleUrls: ['edit-aviso.component.css']
})
export class EditAvisoComponent implements OnInit {

    model: Aviso;

    closeResult: string;

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;

    @Output()
    reload = new EventEmitter();
    
    constructor(private modalService: NgbModal, private service: AvisoService) { }

    ngOnInit(): void {

    }

    open(model: Aviso) {
        this.model = model;
        this.montaModal();
    }

    montaModal() {
        this.modalService.open(this.divContent, { windowClass: 'modalAviso', backdropClass: 'modelBackdrop' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }

    close() {
        this.modalService.dismissAll();
    }

    salvar() {
        if (!this.model.titulo || !this.model.descricao || !this.model.dataAviso) {
            Swal.fire(
                'Atenção',
                'Preencha todos os campos.',
                'warning'
            );
        }
        else {
            this.service.salvar(this.model).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }
    }

    salvarError(err: any): void {

        console.log(err);

        Swal.fire(
            'Erro',
            'Ocorreu um erro ao salvar o Aviso.',
            'error'
        );
    }
    salvarSuccess(res: boolean): void {
        if (res) {
            Swal.fire(
                'Aviso salvo com sucesso!',
                '',
                'success'
            );

            this.modalService.dismissAll();

            this.reload.emit();
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o Aviso.',
                'error'
            );
        }
    }
}