import { Component, OnInit, Input } from '@angular/core';
import { Estado } from '../../../../_shared/services/estado';
import { Pais } from '../../../../_shared/services/pais';
import { DominioService } from '../../../../_shared/services/dominio.service';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { SiteListaIntegradoresService } from '../../../_shared/site-lista-integradores/site-lista-integradores.service';
import { Integrador } from '../../../../_models/integrador';

@Component({
    selector: 'app-site-refrigeracao-segmentos-contato',
    templateUrl: './site-refrigeracao-segmentos-contato.component.html',
    styleUrls: ['./site-refrigeracao-segmentos-contato.component.css']
})
export class SiteRefrigeracaoSegmentosContatoComponent implements OnInit {

    paises: Pais[];
    estados: Estado[];
    temIntegradores: boolean;
    integradores: Integrador[];
    uf = "";

    @Input()
    codigoSegmento: string;

    constructor(
        private dominioService: DominioService,
        private loadingService: LoadingService,
        private integradorService: SiteListaIntegradoresService) { }

    ngOnInit(): void {
        this.dominioService.getPaises().subscribe(
            ret => this.getPaisesSuccess(ret),
            err => this.getPaisesError(err)
        );
    }

    getPaisesSuccess(ret: Pais[]): void {
        this.paises = ret;
    }

    getPaisesError(err: any): void {
        console.log('erro obtendo os países: ' + err.message);
    }

    carregarEstados(pais: number): void {

        this.dominioService.getEstadosPorPais(pais).subscribe(
            ret => this.getEstadosSuccess(ret),
            err => this.getEstadosError(err)
        );
    }

    getEstadosSuccess(ret: Estado[]): void {
        this.estados = ret;
    }

    getEstadosError(err: any): void {
        console.log('erro obtendo o estados: ' + err.message);
    }

    carregarIntegradores(pais: number, uf: string) {
        this.loadingService.show();

        this.integradorService.getIntegradores(pais, uf, this.codigoSegmento).subscribe(
            ret => this.getIntegradoresSuccess(ret),
            err => this.getIntegradoresError(err)
        );
    }

    getIntegradoresSuccess(ret: Integrador[]): void {
        this.loadingService.hide();
        this.integradores = ret;
        this.temIntegradores = this.integradores.length > 0;
    }

    getIntegradoresError(err: any): void {
        this.loadingService.hide();

        console.log('erro obtendo integradores: ' + err.message);
    }

}