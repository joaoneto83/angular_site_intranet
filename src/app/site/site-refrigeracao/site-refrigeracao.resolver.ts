import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../../_models/banner';
import { ImagemService } from '../../_shared/services/imagem.service';
import { Resolve } from '@angular/router';
import { GrupoDestaque } from '../../_models/grupoDestaque';
import { SiteRefrigeracaoService } from './site-refrigeracao.service';
import { Video } from '../../_models/video';
import { VideoService } from '../../_shared/services/video.service';
import { SubLinha } from '../../_models/subLinha';
import { SubLinhaService } from '../../_shared/services/subLinha.service';
import { TraducaoService } from '../_shared/services/traducao.service';

@Injectable({ providedIn: 'root' })
export class RefrigeracaoBannerResolver implements Resolve<Observable<Banner[]>>{

    constructor(private service: ImagemService, private traducao: TraducaoService) { }

    resolve(): Observable<Banner[]> {
        let idiomaSelecionado = this.traducao.getIdioma();
        let idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;

        return this.service.GetBannersIdioma("Site-Refrigeracao", "1", idioma);
    }
}

@Injectable({ providedIn: 'root' })
export class RefrigeracaoBannerResolver2 implements Resolve<Observable<Banner[]>>{

    constructor(private service: ImagemService, private traducao: TraducaoService) { }

    resolve(): Observable<Banner[]> {
        let idiomaSelecionado = this.traducao.getIdioma();
        let idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;

        return this.service.GetBannersIdioma("Site-Refrigeracao", "2", idioma);
    }
}

@Injectable({ providedIn: 'root' })
export class RefrigeracaoGruposDestaqueHome implements Resolve<Observable<GrupoDestaque[]>>{

    constructor(private service: SiteRefrigeracaoService, private traducao: TraducaoService) { }

    resolve(): Observable<GrupoDestaque[]> {
        let idiomaSelecionado = this.traducao.getIdioma();
        let idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;

        return this.service.getGrupoDestaqueProduto("Refrigeracao-Home", idioma);
    }
}

@Injectable({ providedIn: 'root' })
export class VideosRefrigeracaoHomeResolver implements Resolve<Observable<Video[]>>{

    constructor(private service: VideoService, private traducao: TraducaoService) { }

    resolve(): Observable<Video[]> {
        let idiomaSelecionado = this.traducao.getIdioma();
        let idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;
        
        return this.service.getVideosIdioma('Refrigeracao-Home', idioma);
    }
}

@Injectable({ providedIn: 'root' })
export class SublinhaRefrigeracaoResolver implements Resolve<Observable<SubLinha[]>>{

    constructor(private service: SubLinhaService) { }

    resolve(): Observable<SubLinha[]> {
        return this.service.getSubLinhaPorCodigoLinha('Refrigeracao');
    }
}