import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../../../app/_models/banner';
import { ImagemService } from '../../../app/_shared/services/imagem.service';
import { Resolve } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class SiteHomeResolver2 implements Resolve<Observable<Banner[]>>{

    constructor(private service: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.service.GetBanners("Site-Home","2");
    }
}
