import { Component, OnInit } from '@angular/core';
import { DominioService } from '../../../_shared/services/dominio.service';
import { LoadingService } from '../../../_shared/services/loading.service';
import { TipoEventoRefrigeracao } from '../../../_models/tipoEventoRefrigeracao';
import { EventoRefrigeracao } from '../../../_models/eventoRefrigeracao';
import { EventoRefrigeracaoService } from '../../../_shared/services/eventoRefrigeracao.service';
import { ActivatedRoute } from '@angular/router';
import { LinksGrupoDestaque } from '../../../_models/linksGrupoDestaque';
import { Video } from '../../../_models/video';
import { TraducaoService } from '../../_shared/services/traducao.service';

@Component({
    selector: 'app-site-refrigeracao-treinamento',
    templateUrl: './site-refrigeracao-treinamento.component.html',
    styleUrls: ['./site-refrigeracao-treinamento.component.css']
})
export class SiteRefrigeracaoTreinamentoComponent implements OnInit {

    tipos: TipoEventoRefrigeracao[];
    eventos: EventoRefrigeracao[];
    temEventos: boolean;
    links: LinksGrupoDestaque;
    videos: Video[];
    cultura: string;
    meses: any[] = [
        { id: 1, nome: "Janeiro" },
        { id: 2, nome: "Fevereiro" },
        { id: 3, nome: "Março" },
        { id: 4, nome: "Abril" },
        { id: 5, nome: "Maio" },
        { id: 6, nome: "Junho" },
        { id: 7, nome: "Julho" },
        { id: 8, nome: "Agosto" },
        { id: 9, nome: "Setembro" },
        { id: 10, nome: "Outubro" },
        { id: 11, nome: "Novembro" },
        { id: 12, nome: "Dezembro" },
    ];

    constructor(private activatedRoute: ActivatedRoute,
        private dominioService: DominioService,
        private loadingService: LoadingService,
        private eventoService: EventoRefrigeracaoService, 
        private traducao: TraducaoService) {
            
        let idiomaSelecionado = this.traducao.getIdioma();
        this.cultura = idiomaSelecionado == 'pt' ? 'pt-Br' : idiomaSelecionado == 'en' ? 'en-US' : 'es-ES';
    }

    ngOnInit(): void {
        this.links = this.activatedRoute.snapshot.data['links'];
        this.videos = this.activatedRoute.snapshot.data['videos'];

        this.dominioService.getTipoEventos().subscribe(
            ret => this.tipos = ret.filter(x => x.codigo == 'Treinamento' || x.codigo == 'Palestra'),
            err => console.log(err)
        );

        this.eventoService.getTodosEventosTreinamento(this.cultura).subscribe(
            ret => this.getEventosSuccess(ret),
            err => this.getEventosError(err)
        );
    }

    carregarEventos(tipo: number, mes: number) {
        this.loadingService.show();
        this.eventoService.getEventosTreinamento(tipo, mes, this.cultura).subscribe(
            ret => this.getEventosSuccess(ret),
            err => this.getEventosError(err)
        );
    }

    getEventosSuccess(ret: EventoRefrigeracao[]): void {
        this.loadingService.hide();
        this.eventos = ret;
        this.temEventos = this.eventos.length > 0;
    }

    getEventosError(err: any): void {
        this.loadingService.hide();

        console.log('erro obtendo os eventos: ' + err.message);
    }

}