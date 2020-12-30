import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from '../../../_models/produto';
import { SubsiteGelattaService } from './subsite-gelatta.service';

@Injectable({ providedIn: 'root'})
export class ProdutoMaquinaSorveteResolver implements Resolve<Observable<Produto[]>>{

    constructor(private service: SubsiteGelattaService) {}

    resolve(): Observable<Produto[]> {
        return this.service.getComboProdutosMaquinaSorvete();
    }
}