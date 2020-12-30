import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import { ProvaService } from './prova.service';
import { Prova } from '../../_models/prova-oficial';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-lista-prova',
    templateUrl: 'lista-prova.component.html',
    styleUrls: ['lista-prova.component.css']
})
export class ListaProvaComponent implements OnInit {

    provas: Prova[];
    config: any;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private service: ProvaService,
        private headerService: HeaderService,
        private router: Router) {
        this.headerService.menuAtivo('Treinamentos');
        this.headerService.submenuAtivo('Prova');
        this.provas = this.activatedRoute.snapshot.data['provas'];
    }

    ngOnInit(): void {

        this.config = {
            id: 'custom',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.provas.length
        };

        this.loadingService.hide();
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id) {
        this.router.navigate(['/PortaldeApoio/Treinamentos/EditarProva/' + id]);
    }

    deletar(id) {
        Swal.fire({
            title: 'Ateção',
            text: 'Deseja inativar a Prova?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.loadingService.show();
                this.service.inativarProva(id).subscribe(
                    res => this.inativarProvaSuccess(res, id),
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

    inativarProvaSuccess(res: boolean, id: string): void {
        if (res == true) {
            this.provas = this.provas.filter(x => x.id != id);
            Swal.fire('Sucesso', 'Prova inativada com sucesso!', 'success');
        }
        else {
            Swal.fire('Erro', 'Algo inesperado aconteceu. Tente novamente.', 'error');
        }
        this.loadingService.hide();
    }
}