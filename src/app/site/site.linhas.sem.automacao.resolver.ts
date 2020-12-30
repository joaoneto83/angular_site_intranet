import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LinhaService } from '../../app/_shared/services/linha.service';
import { Linha } from '../../app/_models/linha';

@Injectable({ providedIn: 'root'})
export class SiteLinhasSemMenusEspeciaisResolver implements Resolve<Observable<Linha[]>>{

    constructor(private service: LinhaService) {}

    resolve(): Observable<Linha[]> {
        return this.service.getLinhaComSubLinhas(false);

    }
}