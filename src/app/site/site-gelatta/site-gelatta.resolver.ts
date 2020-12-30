import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../../_models/banner';
import { ImagemService } from '../../_shared/services/imagem.service';
import { Resolve } from '@angular/router';
import { ProdutoService } from '../../_shared/services/produto.service';
import { Produto } from '../../_models/produto';
import { PerguntaFrequente } from '../../_models/perguntaFrequente';
import { PerguntaFrequenteService } from '../../_shared/services/perguntaFrequente.service';

@Injectable({ providedIn: 'root'})
export class SiteGelattaResolver implements Resolve<Observable<Banner[]>>{

    constructor(private service: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.service.GetBanners("Site-Gelatta","1");
    }
}

@Injectable({ providedIn: 'root'})
export class SiteGelattaResolver2 implements Resolve<Observable<Banner[]>>{

    constructor(private service: ImagemService) {}

    resolve(): Observable<Banner[]> {
        return this.service.GetBanners("Site-Gelatta","2");
    }
}

@Injectable({ providedIn: 'root'})
export class SiteGelattaProdutosResolver implements Resolve<Observable<Produto[]>>{

    constructor(private service: ProdutoService) {}

    resolve(): Observable<Produto[]> {
        return this.service.getProdutosPorCodigoLinha("MaquinaSorvete");
    }
}

@Injectable({ providedIn: 'root'})
export class GelattaPerguntasFrequentesResolver implements Resolve<Observable<PerguntaFrequente[]>>{

    constructor(private service: PerguntaFrequenteService) {}

    resolve(): Observable<PerguntaFrequente[]> {
        return this.service.getPerguntasFrequentes("Gelatta");
    }
}