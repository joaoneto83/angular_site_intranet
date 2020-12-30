import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import { AssistenciaVinculada } from './assistenciaVinculada';
import { RetornoAssistencia } from './RetornoAssistencia';
import { FiltroAssistencia } from './FiltroAssistencia';
import { AssistenciaSapService } from '../../../_shared/services/assistencia.sap.service';

@Component({
    selector: 'app-adm-assistencia-vinculada',
    templateUrl: 'adm-assistencia-vinculada.component.html',
    styleUrls: ['adm-assistencia-vinculada.component.css']
})
export class AdmAssistenciaVinculadaComponent implements OnInit {

    assistenciasVinculadas: AssistenciaVinculada[];
    config: any;
    assistencias: RetornoAssistencia[] = [];

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private serviceSap: AssistenciaSapService) {
        this.headerService.menuAtivo('Adm');
        this.assistenciasVinculadas = this.activatedRoute.snapshot.data['assistencias'];
    }

    ngOnInit(): void {
        if (this.assistenciasVinculadas) {
            let listaDocs = this.assistenciasVinculadas.map(({ documento }) => documento);

            if (listaDocs) {
                this.serviceSap.postAssistencias({ ListaNumeroDocumento: listaDocs } as FiltroAssistencia).subscribe(
                    res => this.postAssistenciasSuccess(res),
                    err => console.log(err)
                )
            }
        }

        this.config = {
            id: 'custom',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.assistencias.length
        };
    }

    postAssistenciasSuccess(res: RetornoAssistencia[]) {
        this.assistencias = res;

        if (this.assistencias) {
            this.assistenciasVinculadas.forEach(elem => {
                elem.retornoAssistencia = this.assistencias.find(x => x.id == elem.id);
            })
        }
    }

    postAssistenciasError(err: any) {
        Swal.fire('Erro', 'Algo de inesperado aconteceu. Tente novamente mais tarde', 'error');
        console.log(err);
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id){
        this.router.navigate(['/PortaldeApoio/Adm/EditarAssistencia/' + id]);
    }
}