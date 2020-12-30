import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SecaoModeloGrupo } from '../../../app/_models/secaoModeloGrupo';

@Injectable({
    providedIn: 'root',
})
export class SecaoModeloGrupoService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

  get(id: string): Observable<SecaoModeloGrupo> {

    return this.http.get<SecaoModeloGrupo>(
      `${environment.PORTAL_API}/Produto/SecoesModeloGrupo/${id}`);
  }

  getSecaoModeloGrupo(): Observable<SecaoModeloGrupo[]>{

    return this.http.get<SecaoModeloGrupo[]>(
      `${environment.PORTAL_API}/Produto/SecoesModeloGrupo`);
  }

  postNovoGrupo(produto: SecaoModeloGrupo): Observable<string> {

    return this.http.post<string>(
      `${environment.PORTAL_API}/Produto/AddSecaoModeloGrupo`,
      {
        id: produto.id,
        descricao: produto.descricao,
        ativo: true
      });
  }

}
