import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { GrupoDestaque } from '../../../../_models/grupoDestaque';
import { SubsiteRefrigeracaoService } from './subsite-refrigeracao.service';
import { Video } from '../../../../_models/video';
import { VideoService } from '../../../../_shared/services/video.service';
import { LinksGrupoDestaque } from '../../../../_models/linksGrupoDestaque';
import { EventoRefrigeracao } from '../../../../_models/eventoRefrigeracao';

@Injectable({ providedIn: 'root'})
export class GruposDestaqueHomeResolver implements Resolve<Observable<GrupoDestaque[]>>{

    constructor(private service: SubsiteRefrigeracaoService) {}

    resolve(): Observable<GrupoDestaque[]> {
        return this.service.getGruposDestaque('Refrigeracao-Home');
    }
}

@Injectable({ providedIn: 'root'})
export class GruposDestaqueSegmentoResolver implements Resolve<Observable<GrupoDestaque[]>>{

    constructor(private service: SubsiteRefrigeracaoService) {}

    resolve(): Observable<GrupoDestaque[]> {
        return this.service.getGruposDestaque('Refrigeracao-Segmentos');
    }
}

@Injectable({ providedIn: 'root'})
export class VideosHomeResolver implements Resolve<Observable<Video[]>>{

    constructor(private service: VideoService) {}

    resolve(): Observable<Video[]> {
        return this.service.getVideos('Refrigeracao-Home');
    }
}

@Injectable({ providedIn: 'root'})
export class VideosTreinamentoResolver implements Resolve<Observable<Video[]>>{

    constructor(private service: VideoService) {}

    resolve(): Observable<Video[]> {
        return this.service.getVideos('Refrigeracao-Treinamento');
    }
}

@Injectable({ providedIn: 'root'})
export class LinksTreinamentoResolver implements Resolve<Observable<LinksGrupoDestaque>>{

    constructor(private service: SubsiteRefrigeracaoService) {}

    resolve(): Observable<LinksGrupoDestaque> {
        return this.service.getLinks();
    }
}

@Injectable({ providedIn: 'root'})
export class EventosRefrigeracaoResolver implements Resolve<Observable<EventoRefrigeracao[]>>{

    constructor(private service: SubsiteRefrigeracaoService) {}

    resolve(): Observable<EventoRefrigeracao[]> {
        return this.service.getEventos();
    }
}