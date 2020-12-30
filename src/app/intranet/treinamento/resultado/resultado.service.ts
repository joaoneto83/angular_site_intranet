import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { TokenService } from '../../../../app/_core/services/token.service';
import { Resultado } from './resultado';

@Injectable({
    providedIn: 'root',
})
export class ResultadoService {

    constructor(private http: HttpClient) { }

    getResultado(resultado: Resultado): Observable<Resultado> {
        return this.http.post<Resultado>(
            `${environment.PORTAL_API}/Prova/GetResultado/`, resultado);
    }

}