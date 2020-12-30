import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { RH } from './rh';
import { Evento } from './evento/evento';
import { Usuario } from '../_models/usuario';
import { ResponsavelSetor } from './responsavel-setor/responsavel-setor';
import { Feriado } from './calendario-rh/feriado';


@Injectable({
    providedIn: 'root',
})
export class RHService {
    
    constructor(private http: HttpClient) { }

    GetRH(): Observable<RH>{
        return this.http.get<RH>(
            `${environment.PORTAL_API}/RH/GetRH`);
    }

    getEventos(): Observable<Evento[]>{
        return this.http.get<Evento[]>(`${environment.PORTAL_API}/Evento`);
    }
    
    getAniversariantesMes(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${environment.PORTAL_API}/Usuario/GetAniversariantesMes`);
    }

    getResponsaveisSetor(): Observable<ResponsavelSetor[]>{
        return this.http.get<ResponsavelSetor[]>(`${environment.PORTAL_API}/ResponsavelSetor`);
    }
    
    getListaTelefonica(letra: string): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${environment.PORTAL_API}/Usuario/GetListaTelefonica/${letra}`);
    }

    getFeriados(ano: number): Observable<Feriado[]>{
        return this.http.get<Feriado[]>(`${environment.FERIADOS_API}${ano}`);
    }

    getEventosCalendario(ano: number): Observable<Feriado[]>{
        return this.http.get<Feriado[]>(`${environment.PORTAL_API}/Evento/ListarEventosParaCalendario/${ano}`);
    }
}