import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SubLinhaService } from '../_shared/services/subLinha.service';
import { SubLinha } from '../_models/subLinha';
import { TraducaoService } from './_shared/services/traducao.service';

// @Injectable({ providedIn: 'root'})
// export class SiteSubLinhasAutomacaoResolver implements Resolve<Observable<SubLinha[]>>{

//     constructor(private service: SubLinhaService) {}

//     resolve(): Observable<SubLinha[]> {
//         return this.service.getSubLinha('FB0026C2-8025-40CE-9B83-B73C45AAF0C0')

//     }
// }

@Injectable({ providedIn: 'root'})
export class SiteSubLinhasGelattaResolver implements Resolve<Observable<SubLinha[]>>{

    constructor(private service: SubLinhaService) {}

    resolve(): Observable<SubLinha[]> {
        return this.service.getSubLinhaPorCodigoLinha('MaquinaSorvete')

    }
}

@Injectable({ providedIn: 'root'})
export class SiteSubLinhasRefrigeracaoResolver implements Resolve<Observable<SubLinha[]>>{

    constructor(private service: SubLinhaService, private traducao: TraducaoService) {}

    resolve(): Observable<SubLinha[]> {
        let idiomaSelecionado = this.traducao.getIdioma()
        let idioma = idiomaSelecionado == 'es' ? 3 : idiomaSelecionado == 'en' ? 2 : 1;
        return this.service.getSubLinhaPorCodigoLinhaIdioma('Refrigeracao', idioma)

    }
}

@Injectable({ providedIn: 'root'})
export class SiteSubLinhasAutomacaoResolver implements Resolve<Observable<SubLinha[]>>{

    constructor(private service: SubLinhaService) {}

    resolve(): Observable<SubLinha[]> {
        return this.service.getSubLinhaPorCodigoLinha('Automacao')

    }
}