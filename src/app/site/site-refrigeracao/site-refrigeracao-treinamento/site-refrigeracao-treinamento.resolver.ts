import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Video } from '../../../_models/video';
import { VideoService } from '../../../_shared/services/video.service';
import { LinksGrupoDestaque } from '../../../_models/linksGrupoDestaque';
import { SiteRefrigeracaoService } from '../site-refrigeracao.service';
import { TraducaoService } from '../../_shared/services/traducao.service';

@Injectable({ providedIn: 'root'})
export class VideosTreinamentoResolver implements Resolve<Observable<Video[]>>{

    constructor(private service: VideoService, private traducao: TraducaoService) {}

    resolve(): Observable<Video[]> {
        let idiomaSelecionado = this.traducao.getIdioma();
        let idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;

        return this.service.getVideosIdioma('Refrigeracao-Treinamento', idioma);
    }
}

@Injectable({ providedIn: 'root'})
export class LinksTreinamentoResolver implements Resolve<Observable<LinksGrupoDestaque>>{

    constructor(private service: SiteRefrigeracaoService) {}

    resolve(): Observable<LinksGrupoDestaque> {
        return this.service.getLinks();
    }
}