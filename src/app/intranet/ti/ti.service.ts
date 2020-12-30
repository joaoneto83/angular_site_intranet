import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuloArquivoTi } from './modulo-arquivo-ti/moduloArquivoTi';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TiService{
    constructor(private http: HttpClient) { }

    getModulosArquivos(): Observable<ModuloArquivoTi[]>{
        return this.http.get<ModuloArquivoTi[]>(
            `${environment.PORTAL_API}/Ti/GetModulosArquivos`);
    }

    postModulo(modulo: ModuloArquivoTi): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Ti/SalvarModulo`, modulo);
    }
}