import { Component, OnInit, Input } from '@angular/core';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { SiteListaIntegradoresService } from '../../../_shared/site-lista-integradores/site-lista-integradores.service';
import { GrupoDestaque } from '../../../../_models/grupoDestaque';

@Component({
    selector: 'app-site-produtos-segmentos',
    templateUrl: './site-produtos-segmentos.component.html',
    styleUrls: ['./site-produtos-segmentos.component.css']
})
export class SiteProdutosSegmentosComponent implements OnInit {

    constructor(private loadingService: LoadingService,
        private integradorService: SiteListaIntegradoresService) { }

    @Input()
    grupo: GrupoDestaque;

    @Input()
    rows: any[] = [];

    ngOnInit(): void {
    }

}