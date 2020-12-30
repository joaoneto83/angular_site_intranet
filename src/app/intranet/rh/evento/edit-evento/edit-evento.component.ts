import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Evento } from '../evento';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventoService } from '../evento.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-edit-evento',
    templateUrl: './edit-evento.component.html',
    styleUrls: ['./edit-evento.component.css']
})
export class EditEventoComponent {
    model: Evento;

    closeResult: string;

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;

    @Output()
    reload = new EventEmitter();
    
    constructor(private modalService: NgbModal, private service: EventoService) { }

    open(model: Evento) {
        this.model = model;
        this.montaModal();
    }

    montaModal() {
        this.modalService.open(this.divContent, { windowClass: 'modalEvento', backdropClass: 'modelBackdrop' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }

    close() {
        this.modalService.dismissAll();
    }

    salvar() {
        if (!this.model.titulo || !this.model.descricao || !this.model.dataDe || !this.model.dataAte) {
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
            'Ocorreu um erro ao salvar o Evento.',
            'error'
        );
    }

    salvarSuccess(res: boolean): void {
        debugger;
        if (res) {
            Swal.fire(
                'Evento salvo com sucesso!',
                '',
                'success'
            );
            
            this.modalService.dismissAll();

            this.reload.emit();
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o Evento.',
                'error'
            );
        }
    }
}