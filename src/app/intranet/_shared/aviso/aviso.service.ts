import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Aviso } from './aviso';

@Injectable({
    providedIn: 'root',
})
export class AvisoService {
    
    constructor(private http: HttpClient) { 
    }

    getAvisosPorModulo(modulo: string): Observable<Aviso[]>{
        return this.http.get<Aviso[]>(
            `${environment.PORTAL_API}/Aviso/GetAvisosPorModulo/${modulo}`);
    }

    getAvisoPorId(id: string): Observable<Aviso>{
        return this.http.get<Aviso>(
            `${environment.PORTAL_API}/Aviso/GetAvisoPorId/${id}`);
    }

    salvar(model: Aviso):  Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Aviso/Salvar`, model);
    }
}