import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import Swal from 'sweetalert2';
import { Grupo } from './grupo';
import { GrupoService } from './grupo.service';

@Component({
    selector: 'app-lista-grupo',
    templateUrl: 'lista-grupo.component.html',
    styleUrls: ['lista-grupo.component.css']
})
export class ListaGrupoComponent implements OnInit {

    grupos: Grupo[];
    config: any;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private service: GrupoService) {
        this.headerService.menuAtivo('Treinamentos');
        this.headerService.submenuAtivo('Grupo');
        this.grupos = this.activatedRoute.snapshot.data['grupos'];
    }

    ngOnInit(): void {
        this.config = {
            id: 'custom',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.grupos.length
        };
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id){
        this.router.navigate(['/PortaldeApoio/Treinamentos/EditarGrupo/' + id]);
    }

    deletar(id) {
        Swal.fire({
            title: 'Ateção',
            text: 'Deseja inativar o Grupo?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.loadingService.show();
                this.service.inativarGrupo(id).subscribe(
                    res => this.inativarGrupo(res, id),
                    err => {
                        this.loadingService.hide();
                        
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

    inativarGrupo(res: boolean, id: string): void {
        this.loadingService.hide();

        if (res == true) {
            this.grupos = this.grupos.filter(x => x.id != id);
            Swal.fire('Sucesso', 'Agendamento inativado com sucesso!', 'success');
        }
        else {
            Swal.fire('Erro', 'Algo inesperado aconteceu. Tente novamente.', 'error');
        }
    }
}