import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import { Agendamento } from '../../_models/agendamento';
import Swal from 'sweetalert2';
import { AgendamentoService } from './agendamento.service';

@Component({
    selector: 'app-lista-agendamento',
    templateUrl: 'lista-agendamento.component.html',
    styleUrls: ['lista-agendamento.component.css']
})
export class ListaAgendamentoComponent implements OnInit {

    agendamentos: Agendamento[];
    config: any;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private service: AgendamentoService) {
        this.headerService.menuAtivo('Treinamentos');
        this.headerService.submenuAtivo('Agendamento');
        this.agendamentos = this.activatedRoute.snapshot.data['agendamentos'];
    }

    ngOnInit(): void {
        this.config = {
            id: 'custom',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.agendamentos.length
        };
        
        //this.loadingService.hide();
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id){
        this.router.navigate(['/PortaldeApoio/Treinamentos/EditarAgendamento/' + id]);
    }

    deletar(id) {
        Swal.fire({
            title: 'Ateção',
            text: 'Deseja inativar o Agendamento?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.loadingService.show();
                this.service.inativarAgendamento(id).subscribe(
                    res => this.inativarAgendamentoSuccess(res, id),
                    err => {
                        Swal.fire(
                            'Erro',
                            'Algo inesperado acontecer. Tente novamente.',
                            'error'
                        );
                        console.log(err)
                    },
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                )
            }
        })
    }

    inativarAgendamentoSuccess(res: boolean, id: string): void {
        if (res == true) {
            this.agendamentos = this.agendamentos.filter(x => x.id != id);
            Swal.fire('Sucesso', 'Agendamento inativado com sucesso!', 'success');
        }
        else {
            Swal.fire('Erro', 'Algo inesperado aconteceu. Tente novamente.', 'error');
        }
        this.loadingService.hide();
    }
}