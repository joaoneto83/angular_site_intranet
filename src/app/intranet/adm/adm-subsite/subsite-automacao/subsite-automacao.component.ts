import { OnInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { SubsiteAutomacaoService } from './subsite-automacao.service';
import { HeaderService } from '../../../header/header.service';
import { Video } from '../../../../_models/video';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-subsite-automacao',
    templateUrl: 'subsite-automacao.component.html',
    styleUrls: ['subsite-automacao.component.css']
})
export class SubsiteAutomacaoComponent implements OnInit {

    videosHome: Video[] = [] as Video[];

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private service: SubsiteAutomacaoService) {
        this.headerService.menuAtivo('Adm');
    }

    ngOnInit(): void {
        this.videosHome = this.activatedRoute.snapshot.data['videosHome'];
    }

    salvar() {
        this.loadingService.show();


        this.service.salvar(this.videosHome).subscribe(
            res => {
                if (res) {
                    if(this.videosHome.length)
                        this.videosHome = res

                    this.loadingService.hide();
                    Swal.fire(
                        'Configurações salvas com sucesso!',
                        '',
                        'success'
                    );
                }
                else {
                    this.loadingService.hide();
                    Swal.fire(
                        'Erro',
                        'Ocorreu um erro ao salvar.',
                        'error'
                    );
                }
            },
            err => {
                this.loadingService.hide();
                Swal.fire(
                    'Erro',
                    'Algo inesperado aconteceu.',
                    'error'
                );
                console.log(err);
            }
        );
    }

    adicionarVideoHome() {
        this.videosHome.push({ modulo: 'Automacao-Home' } as Video);
    }

    removerVideoHome(i) {
        Swal.fire({
            title: 'Deseja excluir este item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.videosHome.splice(i, 1);
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
