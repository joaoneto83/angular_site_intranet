import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { ResponsavelSetor } from '../responsavel-setor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponsavelSetorService } from '../responsavel-setor.service';

@Component({
    selector: 'app-edit-responsaveis-setor',
    templateUrl: './edit-responsavel-setor.component.html',
    styleUrls: ['./edit-responsavel-setor.component.css']
})
export class EditResponsavelSetorComponent {
    model: ResponsavelSetor;

    closeResult: string;
    novoTelefone: string;

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;

    @Output()
    reload = new EventEmitter();
    
    constructor(private modalService: NgbModal, private service: ResponsavelSetorService) { }

    open(model: ResponsavelSetor) {
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

    adicionarTelefone() {
        if(this.novoTelefone)
            this.model.telefones.push(this.novoTelefone);

        this.novoTelefone = '';
    }

    excluirTelefone(index: number) {
        this.model.telefones.splice(index, 1);
    }

    salvar() {
        if (!this.model.setor || !this.model.nome || this.model.telefones.length == 0) {
            Swal.fire(
                'Atenção',
                'Preencha todos os campos.',
                'warning'
            );
        }
        else {
            this.model.telefone = this.model.telefones.join("|");
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
            'Ocorreu um erro ao salvar o Responsável pelo Setor.',
            'error'
        );
    }

    salvarSuccess(res: boolean): void {
        if (res) {
            Swal.fire(
                'Responsável pelo Setor salvo com sucesso!',
                '',
                'success'
            );

            this.modalService.dismissAll();

            this.reload.emit();
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o Responsável pelo Setor.',
                'error'
            );
        }
    }
}