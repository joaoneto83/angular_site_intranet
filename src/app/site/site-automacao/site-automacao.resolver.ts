import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../../_models/banner';
import { ImagemService } from '../../_shared/services/imagem.service';
import { Resolve } from '@angular/router';
import { Video } from '../../_models/video';
import { VideoService } from '../../_shared/services/video.service';
import { SubLinha } from '../../_models/subLinha';
import { SubLinhaService } from '../../_shared/services/subLinha.service';

@Injectable({ providedIn: 'root'})
export class AutomacaoBannerResolver implements Resolve<Observable<Banner[]>>{

    constructor(private service: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.service.GetBanners("Site-Automacao","1");
    }
}

@Injectable({ providedIn: 'root'})
export class AutomacaoBannerResolver2 implements Resolve<Observable<Banner[]>>{

    constructor(private service: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.service.GetBanners("Site-Automacao","2");
    }
}

@Injectable({ providedIn: 'root'})
export class VideosAutomacaoHomeResolver implements Resolve<Observable<Video[]>>{

    constructor(private service: VideoService) {}

    resolve(): Observable<Video[]> {
        return this.service.getVideos('Automacao-Home');
    }
}

@Injectable({ providedIn: 'root'})
export class SublinhaAutomacaoResolver implements Resolve<Observable<SubLinha[]>>{

    constructor(private service: SubLinhaService) {}

    resolve(): Observable<SubLinha[]> {
        return this.service.getSubLinhaPorCodigoLinha('Automacao');
    }
}