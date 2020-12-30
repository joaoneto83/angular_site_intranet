import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../_shared/services/util.service';
import { Banner } from '../../../_models/banner';
import { ImagemService } from '../../../_shared/services/imagem.service';
import { ConteudoSegmento } from '../../_models/conteudoSegmento';
import { IconeSegmento } from '../../_models/iconeSegmento';
import { SiteRefrigeracaoService } from '../site-refrigeracao.service';
import { GrupoDestaque } from '../../../_models/grupoDestaque';
import { Produto } from '../../../_models/produto';
import { TranslateService } from 'ng2-translate';
import { TraducaoService } from '../../_shared/services/traducao.service';

@Component({
    selector: 'app-site-refrigeracao-segmentos',
    templateUrl: './site-refrigeracao-segmentos.component.html',
    styleUrls: ['./site-refrigeracao-segmentos.component.css']
})
export class SiteRefrigeracaoSegmentosComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute,
        private utilService: UtilService,
        private imagemService: ImagemService,
        private service: SiteRefrigeracaoService,
        private traducao: TraducaoService, private translate: TranslateService) { }

    segmento: ConteudoSegmento;
    banners: Banner[];
    banners2: Banner[];
    codigoSegmento: string;
    grupoDestaque: GrupoDestaque;
    rows: any[] = [];
    rowsProdutos: any[] = [];

    ngOnInit() {
        console.log(this.translate.currentLang)
        this.activatedRoute.params.subscribe(routeParams => {
            this.codigoSegmento = this.activatedRoute.snapshot.params['codigoSegmento'];
        });
        
        this.segmento = this.utilService.retornaSegmento(this.codigoSegmento, this.traducao.getIdioma());

        let idiomaSelecionado = this.traducao.getIdioma();
        let idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;

        this.imagemService.GetBannersIdioma(this.segmento.codigoBanner, '1', idioma).subscribe(
            res => {
                this.banners = res;
                this.imagemService.GetBannersIdioma(this.segmento.codigoBanner, '2', idioma).subscribe(
                    res => {
                        this.banners2 = res;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            err => {
                console.log(err);
            }
        );

        this.service.getGrupoDestaquePorCodigo(this.segmento.codigoGrupo, idioma).subscribe(
            res => {
                this.grupoDestaque = res;
                this.rowsProdutos = this.groupColumnsProdutos(this.grupoDestaque.produtos);
            },
            err => console.log(err)
        );

        this.rows = this.groupColumns(this.segmento.icones);

    }

    groupColumnsProdutos(produtos: Produto[]) {
        const newRows = [];

        for (let index = 0; index < produtos.length; index += 5) {
            newRows.push(produtos.slice(index, index + 5));
        }

        return newRows;
    }

    groupColumns(icones: IconeSegmento[]) {
        const newRows = [];

        for (let index = 0; index < icones.length; index += 5) {
            newRows.push(icones.slice(index, index + 5));
        }

        return newRows;
    }

}