import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../../_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import { AssistenciaSapService } from '../../../_shared/services/assistencia.sap.service';
import { Assistencia } from './assistencia';

@Component({
    selector: 'app-adm-assistencia',
    templateUrl: 'adm-assistencia.component.html',
    styleUrls: ['adm-assistencia.component.css']
})
export class AdmAssistenciaComponent implements OnInit {

    assistencias: Assistencia[];
    config: any;
    buscar: string;

    constructor(private activatedRoute: ActivatedRoute,
        private loadingService: LoadingService,
        private headerService: HeaderService,
        private router: Router,
        private serviceSap: AssistenciaSapService) {
        this.headerService.menuAtivo('Adm');
        this.assistencias = this.activatedRoute.snapshot.data['assistencias'];
    }

    ngOnInit(): void {
        this.config = {
            id: 'custom',
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.assistencias.length
        };
    }

    pageChanged(event) {
        this.config.currentPage = event;
    }

    editar(id){
        this.router.navigate(['/PortaldeApoio/Adm/EditarAssistencia/' + id]);
    }
}