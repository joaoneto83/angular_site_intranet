import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../../../_shared/services/loading.service';
import { SubsiteRefrigeracaoService } from '../subsite-refrigeracao.service';
import { EventoRefrigeracao } from '../../../../../_models/eventoRefrigeracao';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-subsite-refrigeracao-eventos',
    templateUrl: 'subsite-refrigeracao-eventos.component.html',
    styleUrls: ['subsite-refrigeracao-eventos.component.css']
})
export class SubsiteRefrigeracaoEventosComponent {

    config: any;

    @Input()
    eventos: EventoRefrigeracao[];

    @Output()
    idEvento = new EventEmitter<string>();

    @Output()
    atualizar = new EventEmitter();

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private router: Router,
        private service: SubsiteRefrigeracaoService) {

    }

    ngOnInit(): void {
        this.config = {
            id: 'eventos',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.eventos.length
        };
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id) {
        this.idEvento.emit(id);
    }

    deletar(id) {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.service.deleteEventos(id).subscribe(
                    res => {
                        if (res)
                            Swal.fire(
                                'Sucesso',
                                'Exclusão feita com sucesso.',
                                'success'
                            );
                        else
                            Swal.fire(
                                'Erro',
                                'Algo inesperado aconteceu.',
                                'error'
                            );

                        this.atualizar.emit();
                    },
                    err => {
                        Swal.fire(
                            'Erro',
                            'Algo inesperado aconteceu.',
                            'error'
                        );
                        console.log(err)
                    }
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                );
            }
        });

    }
}