import { OnInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Estado } from '../../../../app/_shared/services/estado';
import { Cidade } from '../../../../app/_shared/services/cidade';
import { DominioService } from '../../../../app/_shared/services/dominio.service';
import { AssistenciaService } from './assistencia.service';
import { Assistencia } from './Assistencia';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { PesquisaCidadeEstado } from '../pesquisaCidadeEstado';
import { SolarIntegrador } from 'src/app/intranet/adm/adm-subsite/subsite-solar/solarIntegrador';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteBuscaProdutoComponent } from '../../site-busca-produto/site-busca-produto.component';


@Component({
    selector: 'app-site-solar-integrador',
    templateUrl: 'site.solar.integrador.component.html',
    styleUrls: ['site.solar.integrador.component.css']
})

export class SiteSolarIntegradorComponent implements OnInit, OnChanges {

    estados: Estado[];
    cidades: Cidade[];
    temCredenciados: boolean;
    credenciados: Assistencia[];

    idCidadeSelecionada: number = 0;
    estadoSelecionado: string = "0";

    @Input()
    eventoPesquisa: PesquisaCidadeEstado;

    constructor(
        private dominioService: DominioService,
        private loadingService: LoadingService,
        private assistenciaService: AssistenciaService) { }

    ngOnInit(): void {

        this.dominioService.getEstados().subscribe(
            ret => this.getEstadosSuccess(ret),
            err => this.getEstadosError(err)
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.eventoPesquisa) {
            this.estadoSelecionado = this.eventoPesquisa.uf;
            this.cidades = this.eventoPesquisa.cidades;
            this.idCidadeSelecionada = this.eventoPesquisa.idCidade;

            if (this.estadoSelecionado && this.estadoSelecionado != "0") {
                if (this.idCidadeSelecionada && this.idCidadeSelecionada != 0)
                    setTimeout(() => {
                        this.carregarAssistencias(this.estadoSelecionado, this.idCidadeSelecionada);
                    }, 0);

                else
                    setTimeout(() => {
                        this.carregarAssistencias(this.estadoSelecionado, 0);
                    }, 0);
            }
            else {
                setTimeout(() => {
                    this.credenciados = null;
                }, 0);
            }
        }
    }

    getEstadosSuccess(ret: Estado[]): void {
        this.estados = ret;
    }

    getEstadosError(err: any): void {
        console.log('erro obtendo o Estado: ' + err.message);
    }

    carregarCidades(estado: string): void {

        this.dominioService.getCidades(estado).subscribe(
            ret => this.getCidadesSuccess(ret),
            err => this.getEstadosError(err)
        );

        this.carregarAssistencias(estado, 0);
    }

    getCidadesSuccess(ret: Cidade[]): void {
        this.cidades = ret;

        // this.credenciados = null;
    }

    getCidadesError(err: any): void {
        console.log('erro obtendo a ciadade: ' + err.message);
    }

    retornaAssistencias(uf: string, cidade: number){
        this.carregarAssistencias(uf, cidade);
    }

    carregarAssistencias(uf: string, cidade: number) {
        this.loadingService.show();

        this.assistenciaService.getSolarIntegradores(uf, cidade).subscribe(
            ret => this.getAssistenciasSuccess(ret),
            err => this.getAssistenciasError(err)
        );
    }

    getAssistenciasError(err: any): void {
        this.loadingService.hide();

        console.log('erro obtendo assistencias: ' + err.message);
    }

    getAssistenciasSuccess(ret: Assistencia[]): void {
        this.loadingService.hide();

        this.credenciados = ret;

        this.temCredenciados = this.credenciados.length > 0;
    }

}