import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Secao } from './secao';
import { SecaoModelo } from '../../../_models/secaoModelo';
import { SecaoModeloGrupo } from '../../../_models/secaoModeloGrupo';
import { Produto } from '../../../_models/produto';
import { Arquivo } from "../../../_models/Arquivo";

@Injectable({
    providedIn: 'root',
})
export class CadastroSecaoService {
    constructor(private http: HttpClient) { }

    getSecoes(): Observable<Secao[]>{
        return this.http.get<Secao[]>(
            `${environment.PORTAL_API}/Produto/Secoes`);
    }

  getSecoesModelo(idModelo: string): Observable<SecaoModelo[]>{
    return this.http.get<SecaoModelo[]>(
      `${environment.PORTAL_API}/Produto/SecoesModelo/${idModelo}`);
    }

  addSecaoModelo(secao: SecaoModelo): Observable<SecaoModelo>{
    return this.http.post<SecaoModelo>(
          `${environment.PORTAL_API}/Produto/AddSecaoModelo`, secao);
  }

  updateSecaoModelo(secao: SecaoModelo): Observable<SecaoModelo>{
    return this.http.post<SecaoModelo>(
      `${environment.PORTAL_API}/Produto/UpdateSecaoModelo`, secao);
    }

    delSecaoModelo(id: string): Observable<boolean>{
        return this.http.delete<boolean>(
            `${environment.PORTAL_API}/Produto/DelSecoesModelo/${id}`);
    }

    addImagemSecaoProduto(arquivo: Arquivo): Observable<Arquivo>{
        return this.http.post<Arquivo>(
            `${environment.PORTAL_API}/Produto/AddImagemSecaoModelo`, arquivo);
    }
  salvarSecaoModeloGrupo(arquivo: SecaoModeloGrupo): Observable<SecaoModeloGrupo>{
    return this.http.post<SecaoModeloGrupo>(
      `${environment.PORTAL_API}/Produto/SalvarSecaoModeloGrupo`, arquivo);
    }

    delImagemSecaoProduto(id: string): Observable<boolean>{
        return this.http.delete<boolean>(
            `${environment.PORTAL_API}/Produto/DelImagemSecaoModelo/${id}`);
    }
  retornaSecoesModeloGrupoProduto(id: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(
          `${environment.PORTAL_API}/Produto/RetornaSecoesModeloGrupoProduto/${id}`);
    }
  adicionarProduto(id: string): Observable<Produto>{
    return this.http.get<Produto>(
      `${environment.PORTAL_API}/Produto?produto=${id}&ativo=true`);
    }
}
