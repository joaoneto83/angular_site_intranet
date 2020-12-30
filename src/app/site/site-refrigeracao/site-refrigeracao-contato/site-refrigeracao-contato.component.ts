import { Component, OnInit } from '@angular/core';
import { Estado } from '../../../_shared/services/estado';
import { Segmento } from '../../../_shared/services/segmento';
import { Pais } from '../../../_shared/services/pais';
import { DominioService } from '../../../_shared/services/dominio.service';
import { LoadingService } from '../../../_shared/services/loading.service';
import { SiteListaIntegradoresService } from '../../_shared/site-lista-integradores/site-lista-integradores.service';
import { Integrador } from '../../../_models/integrador';

@Component({
    selector: 'app-site-refrigeracao-contato',
    templateUrl: './site-refrigeracao-contato.component.html',
    styleUrls: ['./site-refrigeracao-contato.component.css']
})
export class SiteRefrigeracaoContatoComponent implements OnInit {
    
    paises: Pais[];
    estados: Estado[];
    segmentos: Segmento[];
    temIntegradores: boolean;
    integradores: Integrador[];
    uf = "";

    constructor(
        private dominioService: DominioService,
        private loadingService: LoadingService,
        private integradorService: SiteListaIntegradoresService) { }

    ngOnInit(): void {
        this.dominioService.getPaises().subscribe(
            ret => this.getPaisesSuccess(ret),
            err => this.getPaisesError(err)
        );

        this.dominioService.getSegmentos().subscribe(
            ret => this.getSegmentosSuccess(ret),
            err => this.getSegmentosError(err)
        );
    }

    getPaisesSuccess(ret: Pais[]): void {
        this.paises = ret;
    }

    getPaisesError(err: any): void {
        console.log('erro obtendo os países: ' + err.message);
    }

    getSegmentosSuccess(ret: Segmento[]): void {
        this.segmentos = ret;
    }

    getSegmentosError(err: any): void {
        console.log('erro obtendo os segmentos: ' + err.message);
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

    carregarIntegradores(pais:number, uf:string, segmento:string) {
        this.loadingService.show();
        
        this.integradorService.getIntegradores(pais, uf, segmento).subscribe(
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