import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LinhaService } from '../../_shared/services/linha.service';
import { Linha } from '../../_models/linha';

@Injectable({ providedIn: 'root'})
export class BlogsResolver implements Resolve<Observable<Linha[]>>{

    constructor(private service: LinhaService) {}

    resolve(): Observable<Linha[]> {
        return this.service.getLinha();

    }
}