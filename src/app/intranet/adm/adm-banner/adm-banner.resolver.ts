import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { ImagemService } from '../../../_shared/services/imagem.service';
import { Banner } from '../../../_models/banner';

@Injectable({ providedIn: 'root'})
export class BannerHomeResolver implements Resolve<Observable<Banner[]>>{

    constructor(private imagemService: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.imagemService.GetBanners('Site-Home','1');
    }
}

@Injectable({ providedIn: 'root'})
export class BannerHomeResolver2 implements Resolve<Observable<Banner[]>>{

    constructor(private imagemService: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.imagemService.GetBanners('Site-Home','2');
    }
}

@Injectable({ providedIn: 'root'})
export class BannerGelattaResolver implements Resolve<Observable<Banner[]>>{

    constructor(private imagemService: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.imagemService.GetBanners('Site-Gelatta','1');
    }
}

@Injectable({ providedIn: 'root'})
export class BannerGelattaResolver2 implements Resolve<Observable<Banner[]>>{

    constructor(private imagemService: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.imagemService.GetBanners('Site-Gelatta','2');
    }
}

@Injectable({ providedIn: 'root'})
export class BannerRefrigeracaoResolver implements Resolve<Observable<Banner[]>>{

    constructor(private imagemService: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.imagemService.GetBanners('Site-Refrigeracao','1');
    }
}

@Injectable({ providedIn: 'root'})
export class BannerRefrigeracaoResolver2 implements Resolve<Observable<Banner[]>>{

    constructor(private imagemService: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.imagemService.GetBanners('Site-Refrigeracao','2');
    }
}